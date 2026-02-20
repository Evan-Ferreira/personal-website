import { NextRequest, NextResponse } from 'next/server';
import supabase from '@/utils/supabase/admin';

export async function PATCH(
    req: NextRequest,
    { params }: { params: Promise<{ slug: string }> },
) {
    try {
        const { slug } = await params;
        const { increment_amount } = await req.json();

        if (!increment_amount) {
            return NextResponse.json(
                { error: 'Increment amount is required' },
                { status: 400 },
            );
        }

        if (increment_amount <= 0 || increment_amount > 5) {
            return NextResponse.json(
                {
                    error: 'Increment amount must be greater than 0 and less than 5',
                },
                { status: 400 },
            );
        }

        const { data: newBoops, error } = await supabase.rpc(
            'increment_article_likes',
            {
                article_id: slug,
                amount: increment_amount,
            },
        );

        if (error) {
            throw error;
        }

        if (newBoops === 0 || newBoops === null) {
            return NextResponse.json(
                { error: 'Article not found' },
                { status: 404 },
            );
        }

        return NextResponse.json({ boops: newBoops });
    } catch (error) {
        return NextResponse.json(
            { error: 'Error updating article boops' },
            { status: 500 },
        );
    }
}

import { NextRequest, NextResponse } from 'next/server';
import supabase from '@/utils/supabase/admin';

export async function POST(
    _req: NextRequest,
    { params }: { params: Promise<{ id: string }> },
) {
    try {
        const { id } = await params;

        const { data, error } = await supabase
            .from('visitors')
            .upsert(
                {
                    id,
                    updated_at: new Date().toISOString(),
                },
                {
                    onConflict: 'id',
                },
            )
            .select('id, created_at, updated_at')
            .single();

        if (error) {
            throw error;
        }

        return NextResponse.json({
            success: true,
            new_visitor:
                new Date(data.created_at).getTime() ===
                new Date(data.updated_at).getTime(),
        });
    } catch (error) {
        console.error('Error fetching visitor data from database', error);
        return NextResponse.json(
            { error: 'Error fetching visitor data from database' },
            { status: 500 },
        );
    }
}

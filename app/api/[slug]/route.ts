import supabase from '@/utils/supabase/admin';
import { NextRequest } from 'next/server';

export async function GET(
    _req: NextRequest,
    { params }: { params: Promise<{ slug: string }> },
) {
    try {
        const { slug } = await params;

        const { data, error } = await supabase
            .from('articles')
            .select('views, likes')
            .eq('slug', slug)
            .maybeSingle();

        if (!data) {
            return Response.json(
                { error: 'Article not found' },
                { status: 404 },
            );
        }

        if (error) {
            throw error;
        }

        return Response.json({ views: data.views, likes: data.likes });
    } catch (error) {
        return Response.json(
            { error: `Unable to fetch article stats at this time` },
            { status: 500 },
        );
    }
}

create table "public"."articles" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "slug" text not null,
    "views" bigint not null default '0'::bigint,
    "likes" bigint not null default '0'::bigint
      );

alter table "public"."articles" enable row level security;

CREATE UNIQUE INDEX articles_pkey ON public.articles USING btree (id, slug);

alter table "public"."articles" add constraint "articles_pkey" PRIMARY KEY using index "articles_pkey";
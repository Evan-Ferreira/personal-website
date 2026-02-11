create table "public"."articles" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "slug" text not null,
    "views" bigint default '0'::bigint,
    "likes" bigint default '0'::bigint
      );

alter table "public"."articles" enable row level security;

CREATE UNIQUE INDEX articles_pkey ON public.articles USING btree (id, slug);

alter table "public"."articles" add constraint "articles_pkey" PRIMARY KEY using index "articles_pkey";

create policy "Enable read access for all users"
  on "public"."articles"
  as permissive
  for select
  to public
using (true);

create policy "Enable update access for all users"
  on "public"."articles"
  as permissive
  for update
  to public
using (true);
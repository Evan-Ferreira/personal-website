create table "public"."articles" (
    "id" text not null,
    "created_at" timestamp with time zone not null default now(),
    "views" bigint not null default '0'::bigint,
    "likes" bigint not null default '0'::bigint
      );

alter table "public"."articles" enable row level security;

alter table "public"."articles" add constraint "articles_pkey" primary key ("id");
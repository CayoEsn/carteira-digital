-- ----------------------------
-- Sequence structure for Movimentacao2_id_transacao_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."Movimentacao_id_transacao_seq";
CREATE SEQUENCE "public"."Movimentacao_id_transacao_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
ALTER SEQUENCE "public"."Movimentacao_id_transacao_seq" OWNER TO "postgres";

-- ----------------------------
-- Table structure for Movimentacao
-- ----------------------------
DROP TABLE IF EXISTS "public"."Movimentacao";
CREATE TABLE "public"."Movimentacao" (
  "id_transacao" int4 NOT NULL DEFAULT nextval('"Movimentacao_id_transacao_seq"'::regclass),
  "data" timestamptz(6) NOT NULL DEFAULT now(),
  "login_origem" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "login_destino" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "valor_transferido" float8 NOT NULL
);
ALTER TABLE "public"."Movimentacao" OWNER TO "postgres";

-- ----------------------------
-- Table structure for Saldo
-- ----------------------------
DROP TABLE IF EXISTS "public"."Saldo";
CREATE TABLE "public"."Saldo" (
  "login" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "saldo" float8 NOT NULL
);
ALTER TABLE "public"."Saldo" OWNER TO "postgres";

-- ----------------------------
-- Table structure for Usuario
-- ----------------------------
DROP TABLE IF EXISTS "public"."Usuario";
CREATE TABLE "public"."Usuario" (
  "login" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "senha" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "nome" varchar COLLATE "pg_catalog"."default"
);
ALTER TABLE "public"."Usuario" OWNER TO "postgres";

-- ----------------------------
-- Primary Key structure for table Movimentacao
-- ----------------------------
ALTER TABLE "public"."Movimentacao" ADD CONSTRAINT "Movimentacao_pkey" PRIMARY KEY ("id_transacao");

-- ----------------------------
-- Primary Key structure for table Saldo
-- ----------------------------
ALTER TABLE "public"."Saldo" ADD CONSTRAINT "Saldo_pkey" PRIMARY KEY ("login");

-- ----------------------------
-- Primary Key structure for table Usuario
-- ----------------------------
ALTER TABLE "public"."Usuario" ADD CONSTRAINT "usuarios_pkey" PRIMARY KEY ("login");

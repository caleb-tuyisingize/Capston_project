toc.dat                                                                                             0000600 0004000 0002000 00000007141 15006102030 0014425 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP   +                    }           student_management    17.4    17.4     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false         �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false         �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false         �           1262    16404    student_management    DATABASE     x   CREATE DATABASE student_management WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en-US';
 "   DROP DATABASE student_management;
                     postgres    false         �            1259    16406    students    TABLE     T  CREATE TABLE public.students (
    sid integer NOT NULL,
    firstname character varying(100),
    lastname character varying(100),
    student_id character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    dob date,
    contact_number character varying(100),
    en_date date,
    profile_pic character varying(100)
);
    DROP TABLE public.students;
       public         heap r       postgres    false         �            1259    16405    students_sid_seq    SEQUENCE     �   CREATE SEQUENCE public.students_sid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.students_sid_seq;
       public               postgres    false    218         �           0    0    students_sid_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.students_sid_seq OWNED BY public.students.sid;
          public               postgres    false    217         !           2604    16409    students sid    DEFAULT     l   ALTER TABLE ONLY public.students ALTER COLUMN sid SET DEFAULT nextval('public.students_sid_seq'::regclass);
 ;   ALTER TABLE public.students ALTER COLUMN sid DROP DEFAULT;
       public               postgres    false    218    217    218         �          0    16406    students 
   TABLE DATA           z   COPY public.students (sid, firstname, lastname, student_id, email, dob, contact_number, en_date, profile_pic) FROM stdin;
    public               postgres    false    218       4794.dat �           0    0    students_sid_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.students_sid_seq', 1, false);
          public               postgres    false    217         #           2606    16417    students students_email_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_email_key UNIQUE (email);
 E   ALTER TABLE ONLY public.students DROP CONSTRAINT students_email_key;
       public                 postgres    false    218         %           2606    16413    students students_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (sid);
 @   ALTER TABLE ONLY public.students DROP CONSTRAINT students_pkey;
       public                 postgres    false    218         '           2606    16415     students students_student_id_key 
   CONSTRAINT     a   ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_student_id_key UNIQUE (student_id);
 J   ALTER TABLE ONLY public.students DROP CONSTRAINT students_student_id_key;
       public                 postgres    false    218                                                                                                                                                                                                                                                                                                                                                                                                                                       4794.dat                                                                                            0000600 0004000 0002000 00000000005 15006102030 0014237 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           restore.sql                                                                                         0000600 0004000 0002000 00000006775 15006102030 0015366 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        --
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE student_management;
--
-- Name: student_management; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE student_management WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en-US';


ALTER DATABASE student_management OWNER TO postgres;

\connect student_management

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: students; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.students (
    sid integer NOT NULL,
    firstname character varying(100),
    lastname character varying(100),
    student_id character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    dob date,
    contact_number character varying(100),
    en_date date,
    profile_pic character varying(100)
);


ALTER TABLE public.students OWNER TO postgres;

--
-- Name: students_sid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.students_sid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.students_sid_seq OWNER TO postgres;

--
-- Name: students_sid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.students_sid_seq OWNED BY public.students.sid;


--
-- Name: students sid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students ALTER COLUMN sid SET DEFAULT nextval('public.students_sid_seq'::regclass);


--
-- Data for Name: students; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.students (sid, firstname, lastname, student_id, email, dob, contact_number, en_date, profile_pic) FROM stdin;
\.
COPY public.students (sid, firstname, lastname, student_id, email, dob, contact_number, en_date, profile_pic) FROM '$$PATH$$/4794.dat';

--
-- Name: students_sid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.students_sid_seq', 1, false);


--
-- Name: students students_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_email_key UNIQUE (email);


--
-- Name: students students_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (sid);


--
-- Name: students students_student_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_student_id_key UNIQUE (student_id);


--
-- PostgreSQL database dump complete
--

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
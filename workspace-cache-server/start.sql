CREATE DATABASE starterkitcache;
CREATE TABLE setvalue(id integer serial primary key, newvalue integer, tx text unique, sender text)

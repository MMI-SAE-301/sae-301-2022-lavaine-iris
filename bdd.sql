--
-- code pour la création des tables
--
CREATE TABLE Montre (
    id int,
    commande boolean,
    boitier varchar,
    ecran varchar, 
    id_user int, 
    id_mat_boitier int,
    id_mat_bracelet int,
    bracelet varchar,
    texte varchar,
    PRIMARY KEY (id),
    FOREIGN KEY (id_user) references auth,
    FOREIGN KEY (id_mat_boitier) references Matériaux,
    FOREIGN KEY (id_mat_bracelet) references Matériaux
)

CREATE TABLE Matériaux (
    id int,
    Libelle varchar,
    PRIMARY KEY (id)
)
--
-- code pour la création des vues
--
CREATE VIEW allCuirs as
select "Montre".*
from "Matériaux", "Montre"
where "Matériaux"."Id" = "Montre".id_mat_boitier or "Matériaux"."Id" = "Montre".id_mat_bracelet
and "Matériaux"."Libelle" = 'Cuir';

CREATE VIEW allMatériaux as
SELECT *
FROM "Matériaux";

CREATE view allMontre as
SELECT *
FROM "Montre";
--
-- code pour la création des policies
--
(uid() = id_user)
(uid() IN ( SELECT allMontre.id_user
   FROM allMontre))
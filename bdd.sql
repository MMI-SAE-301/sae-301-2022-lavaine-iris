--
-- code pour la création des tables
--








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

create view allMontre as
SELECT *
FROM "Montre";
(uid() = id_user)
(uid() IN ( SELECT allMontre.id_user
   FROM allMontre))
--
-- code pour la création des policies
--
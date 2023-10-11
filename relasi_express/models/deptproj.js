import db from "../config.js";
import Departmentdb from "./departement.js";
import Projectdb from "./project.js";

const Deptprojdb = db.define(
  "deptproj",
  {},
  { freezeTableName: true },
  { timestams: false }
);

Departmentdb.belongsToMany(Projectdb, { through: Deptprojdb });
Projectdb.belongsToMany(Departmentdb, { through: Deptprojdb });

export { Deptprojdb, Projectdb, Departmentdb };
(async () => {
  await db.sync();
})();

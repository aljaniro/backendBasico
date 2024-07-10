import pool from "../db.js";
export const getstudents = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM persona");
  await res.json(rows);
};

export const getbyid = async (req, res) => {
 try {
    const id = req.params.id;
  const [rows] = await pool.query("SELECT * FROM persona WHERE idPersona=?", [
    id,
  ]);
  console.log(rows);
  if (rows.length <= 0) {
    return res.status(400).json({
      message: "no se encontro ni verga",
    });
  }
  res.json(rows[0]);
 } catch (error) {
    return res.status(500).json({
        message:"ERROR EN EL SERVIDOR"
    })
 }
  
};

export const postStudents = async (req, res) => {
  console.log(req.body);
  const { Nombre, Apellido, email, ciudad, telefono } = req.body;
  await pool.query(
    "INSERT INTO persona(Nombre,Apellido,Email,Ciudad,Telefono) values (?,?,?,?,?)",
    [Nombre, Apellido, email, ciudad, telefono]
  );
  console.log(req.body);
  await res.send("ingresando estudiante");
};

export const updateStudents = async (req, res) => {
  const { Nombre, Apellido, email, ciudad, telefono } = req.body;

  const [result] = await pool.query(
    "UPDATE persona SET Nombre=?,Apellido=?,email=?,ciudad=?,telefono=? WHERE idPersona=? ",
    [Nombre, Apellido, email, ciudad, telefono, req.params.id]
  );

  if (result.affectedRows <= 0) {
    return res.status(400).json({
      message: "ID NO ENCONTRADO",
    });
  }

  res.sendStatus(204);
};

export const deleteStudents = async (req, res) => {
  const [result] = await pool.query("DELETE FROM persona WHERE idPersona= ?", [
    req.params.id,
  ]);
  if (result.affectedRows <= 0) {
    return res.status(404).json({
      message: "id no encontrado",
    });
  }
  res.sendStatus(204);
};

export const pingpong = async (req, res) => {
  const result = await pool.query("SELECT 1 + 1 AS result");
  res.json(result);
};

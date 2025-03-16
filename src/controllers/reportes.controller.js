import { pool } from "../db.js";
import https from "https"; // Cambiado de http a https para manejar URLs https

export const getPlanillas = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT e.fecha_registro AS `FECHA`, p.tipo_documento AS `TIPO_DOC`, p.documento AS `No_DOCUMENTO`, p.primer_apellido AS `PRIMER_APELLIDO`,p.segundo_apellido AS `SEGUNDO_APELLIDO`,p.primer_nombre AS `PRIMER_NOMBRE`,p.segundo_nombre AS `SEGUNDO_NOMBRE`, p.genero AS `SEXO`, p.edad AS `EDAD`, e.codigo_diagnostico AS `DX`, e.codigo_procedimiento AS `PROCEDIMIENTO`, e.valor AS `VALOR_PROCEDIMIENTO`, e.medio_pago AS `MEDIO DE PAGO`, e.hora AS `HORA DE ATENCION`, DAY(p.nacimiento) AS `DIA_NAC`,MONTH(p.nacimiento) AS `MES_NAC`,YEAR(p.nacimiento) AS `AÑO_NAC`, p.nacionalidad AS `NACIONALIDAD`, p.pais_residencia AS `PAIS RESIDENCIA` FROM pacientes p JOIN evoluciones e ON p.documento = e.documento");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getPlanilla = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT '' AS `FECHA`, p.tipo_documento AS `TIPO DOC`, p.documento, p.nombre, p.genero AS `SEXO`, p.edad, e.motivo AS `DX`, e.procedimiento, '' AS `VALOR PROCEDIMIENTO`, '' AS `MEDIO DE PAGO`, e.hora AS `HORA DE ATENCION`, p.nacimiento, p.nacionalidad, '' AS `PAIS RESIDENCIA` FROM pacientes p JOIN evoluciones e ON p.documento = e.documento WHERE documento = ?", [
      id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Historia not found" });
    }

    res.json(rows); // Devuelve todos los registros en 'rows'
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};



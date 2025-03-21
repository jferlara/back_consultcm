import { pool } from "../db.js";
import https from 'https'; // Cambiado de http a https para manejar URLs https

export const getHistorias = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM historias");
        res.json(rows);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
};

export const getHistoria = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await pool.query("SELECT * FROM historias WHERE documento = ?", [id]);

        if (rows.length <= 0) {
            return res.status(404).json({ message: "Historia not found" });
        }

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
};

export const deleteHistorias = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await pool.query("DELETE FROM historias WHERE id = ?", [id]);

        if (rows.affectedRows <= 0) {
            return res.status(404).json({ message: "Historias not found" });
        }

        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
};


export const createHistoria = async (req, res) => {
    try {
        const {
          documento,
          nombre,
          abseso, // cambio
          aislamiento,
          anestesia,
          bolsas, // cambio
          calculos, // cambio
          cansancio,
          cariados,
          carrillos, // cambio
          cirugia, // cambio
          contacto_covid,
          covid,
          diagnostico_dental, // cambio
          diagnostico_periodontal, // cambio
          diagnostico_pulpar, // cambio
          diarrea,
          endodoncia, // cambio
          evolucion,
          facetas, // cambio
          fecha,
          fiebre,
          frenillos, // cambio
          gingivitis, // cambio
          gusto,
          habitos_higiene, // cambio
          habitos_parafuncionales, // cambio
          implantes, // cambio
          labios, // cambio
          lengua, // cambio
          materia_alba, // cambio
          mialgia, // cambio
          mordida_abierta, // cambio
          mordida_cerrada,
          mordida_cruzada, // cambio
          motivo,
          movilidad, // cambio
          observaciones,
          obturados,
          odontograma,
          odontopediatria, // cambio
          ortodoncia, // cambio
          paciente_id,
          paladar, // cambio
          patologia, // cambio
          perdidos,
          periodoncia, // cambio
          periodontitis, // cambio
          piso, // cambio
          Placa_bacteriana, // cambio
          plan_tratamiento, // cambio
          procedimiento,
          Prognatismo, // cambio
          pyp, // cambio
          reabsorcion,  // cambio
          rehabilitacion, // cambio
          remisiones, // cambio
          resistencia_anestesia_local,
          resistencia_otros,
          retrognatismo, // cambio
          sanos,
          sesion,
          temperatura,
          tos,
          ultima_visita_odontologo, // cambio
          fecha_registro,
        } = req.body;
        const [result] = await pool.query(
          "INSERT INTO historias (documento,	nombre,	abseso,	aislamiento,	anestesia,	bolsas,	calculos,	cansancio,	cariados,	carrillos,	cirugia,contacto_covid,	covid,	diagnostico_dental,	diagnostico_periodontal,	diagnostico_pulpar,	diarrea,	endodoncia,	evolucion,	facetas,	fecha,	fiebre,	frenillos,	gingivitis,	gusto,	habitos_higiene,	habitos_parafuncionales,	implantes, labios,	lengua,	materia_alba,	mialgia,	mordida_abierta,	mordida_cerrada,	mordida_cruzada,	motivo,	movilidad,	observaciones,	obturados,	odontograma,	odontopediatria,	ortodoncia,	paciente_id,	paladar,patologia,	perdidos,	periodoncia,	periodontitis,	piso,	Placa_bacteriana,	plan_tratamiento,	procedimiento,	Prognatismo,	pyp,reabsorcion,	rehabilitacion,	remisiones,	resistencia_anestesia_local,	resistencia_otros,	retrognatismo,	sanos,	sesion,	temperatura,	tos,	ultima_visita_odontologo,	fecha_registro) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
          [
            documento,
            nombre,
            abseso,
            aislamiento,
            anestesia,
            bolsas,
            calculos,
            cansancio,
            cariados,
            carrillos,
            cirugia,
            contacto_covid,
            covid,
            diagnostico_dental,
            diagnostico_periodontal,
            diagnostico_pulpar,
            diarrea,
            endodoncia,
            evolucion,
            facetas,
            fecha,
            fiebre,
            frenillos,
            gingivitis,
            gusto,
            habitos_higiene,
            habitos_parafuncionales,
            implantes,
            labios,
            lengua,
            materia_alba,
            mialgia,
            mordida_abierta,
            mordida_cerrada,
            mordida_cruzada,
            motivo,
            movilidad,
            observaciones,
            obturados,
            odontograma,
            odontopediatria,
            ortodoncia,
            paciente_id,
            paladar,
            patologia,
            perdidos,
            periodoncia,
            periodontitis,
            piso,
            Placa_bacteriana,
            plan_tratamiento,
            procedimiento,
            Prognatismo,
            pyp,
            reabsorcion,
            rehabilitacion,
            remisiones,
            resistencia_anestesia_local,
            resistencia_otros,
            retrognatismo,
            sanos,
            sesion,
            temperatura,
            tos,
            ultima_visita_odontologo,
            fecha_registro,
          ]
        );
    
        res
          .status(201)
          .json({
            id: result.insertId,
            documento,
            nombre,
            abseso,
            aislamiento,
            anestesia,
            bolsas,
            calculos,
            cansancio,
            cariados,
            carrillos,
            cirugia,
            contacto_covid,
            covid,
            diagnostico_dental,
            diagnostico_periodontal,
            diagnostico_pulpar,
            diarrea,
            endodoncia,
            evolucion,
            facetas,
            fecha,
            fiebre,
            frenillos,
            gingivitis,
            gusto,
            habitos_higiene,
            habitos_parafuncionales,
            implantes,
            labios,
            lengua,
            materia_alba,
            mialgia,
            mordida_abierta,
            mordida_cerrada,
            mordida_cruzada,
            motivo,
            movilidad,
            observaciones,
            obturados,
            odontograma,
            odontopediatria,
            ortodoncia,
            paciente_id,
            paladar,
            patologia,
            perdidos,
            periodoncia,
            periodontitis,
            piso,
            Placa_bacteriana,
            plan_tratamiento,
            procedimiento,
            Prognatismo,
            pyp,
            reabsorcion,
            rehabilitacion,
            remisiones,
            resistencia_anestesia_local,
            resistencia_otros,
            retrognatismo,
            sanos,
            sesion,
            temperatura,
            tos,
            ultima_visita_odontologo,
            fecha_registro,
          });
      } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
      }
};

export const updateHistoria = async (req, res) => {
    try {
        const { id } = req.params;
        const { documento,
            nombre,
            abseso,
            aislamiento,
            anestesia,
            bolsas,
            calculos,
            cansancio,
            cariados,
            carrillos,
            cirugia,
            contacto_covid,
            covid,
            diagnostico_dental,
            diagnostico_periodontal,
            diagnostico_pulpar,
            diarrea,
            endodoncia,
            evolucion,
            facetas,
            fecha,
            fiebre,
            frenillos,
            gingivitis,
            gusto,
            habitos_higiene,
            habitos_parafuncionales,
            implantes,
            labios,
            lengua,
            materia_alba,
            mialgia,
            mordida_abierta,
            mordida_cerrada,
            mordida_cruzada,
            motivo,
            movilidad,
            observaciones,
            obturados,
            odontograma,
            odontopediatria,
            ortodoncia,
            paciente_id,
            paladar,
            patologia,
            perdidos,
            periodoncia,
            periodontitis,
            piso,
            Placa_bacteriana,
            plan_tratamiento,
            procedimiento,
            Prognatismo,
            pyp,
            reabsorcion,
            rehabilitacion,
            remisiones,
            resistencia_anestesia_local,
            resistencia_otros,
            retrognatismo,
            sanos,
            sesion,
            temperatura,
            tos,
            ultima_visita_odontologo,
            fecha_registro } = req.body;

        const [result] = await pool.query(
            "UPDATE historias SET documento = IFNULL(?, documento), nombre = IFNULL(?, nombre), abseso = IFNULL(?, abseso), aislamiento = IFNULL(?, aislamiento), anestesia = IFNULL(?, anestesia), bolsas = IFNULL(?, bolsas), calculos = IFNULL(?, calculos), cansancio = IFNULL(?, cansancio), cariados = IFNULL(?, cariados), carrillos = IFNULL(?, carrillos), cirugia = IFNULL(?, cirugia), contacto_covid = IFNULL(?, contacto_covid), covid = IFNULL(?, covid), diagnostico_dental = IFNULL(?, diagnostico_dental), diagnostico_periodontal = IFNULL(?, diagnostico_periodontal), diagnostico_pulpar = IFNULL(?, diagnostico_pulpar), diarrea = IFNULL(?, diarrea), endodoncia = IFNULL(?, endodoncia), evolucion = IFNULL(?, evolucion), facetas = IFNULL(?, facetas), fecha = IFNULL(?, fecha), fiebre = IFNULL(?, fiebre), frenillos = IFNULL(?, frenillos), gingivitis = IFNULL(?, gingivitis), gusto = IFNULL(?, gusto), habitos_higiene = IFNULL(?, habitos_higiene), habitos_parafuncionales = IFNULL(?, habitos_parafuncionales), implantes = IFNULL(?, implantes), labios = IFNULL(?, labios), lengua = IFNULL(?, lengua), materia_alba = IFNULL(?, materia_alba), mialgia = IFNULL(?, mialgia), mordida_abierta = IFNULL(?, mordida_abierta), mordida_cerrada = IFNULL(?, mordida_cerrada), mordida_cruzada = IFNULL(?, mordida_cruzada), motivo = IFNULL(?, motivo), movilidad = IFNULL(?, movilidad), observaciones = IFNULL(?, observaciones), obturados = IFNULL(?, obturados), odontograma = IFNULL(?, odontograma), odontopediatria = IFNULL(?, odontopediatria), ortodoncia = IFNULL(?, ortodoncia), paciente_id = IFNULL(?, paciente_id), paladar = IFNULL(?, paladar), patologia = IFNULL(?, patologia), perdidos = IFNULL(?, perdidos), periodoncia = IFNULL(?, periodoncia), periodontitis = IFNULL(?, periodontitis), piso = IFNULL(?, piso), Placa_bacteriana = IFNULL(?, Placa_bacteriana), plan_tratamiento = IFNULL(?, plan_tratamiento), procedimiento = IFNULL(?, procedimiento), Prognatismo = IFNULL(?, Prognatismo), pyp = IFNULL(?, pyp), reabsorcion = IFNULL(?, reabsorcion), rehabilitacion = IFNULL(?, rehabilitacion), remisiones = IFNULL(?, remisiones), resistencia_anestesia_local = IFNULL(?, resistencia_anestesia_local), resistencia_otros = IFNULL(?, resistencia_otros), retrognatismo = IFNULL(?, retrognatismo), sanos = IFNULL(?, sanos), sesion = IFNULL(?, sesion), temperatura = IFNULL(?, temperatura), tos = IFNULL(?, tos), ultima_visita_odontologo = IFNULL(?, ultima_visita_odontologo), fecha_registro = IFNULL(?, fecha_registro) WHERE id = ?",
            [documento,
                nombre,
                abseso,
                aislamiento,
                anestesia,
                bolsas,
                calculos,
                cansancio,
                cariados,
                carrillos,
                cirugia,
                contacto_covid,
                covid,
                diagnostico_dental,
                diagnostico_periodontal,
                diagnostico_pulpar,
                diarrea,
                endodoncia,
                evolucion,
                facetas,
                fecha,
                fiebre,
                frenillos,
                gingivitis,
                gusto,
                habitos_higiene,
                habitos_parafuncionales,
                implantes,
                labios,
                lengua,
                materia_alba,
                mialgia,
                mordida_abierta,
                mordida_cerrada,
                mordida_cruzada,
                motivo,
                movilidad,
                observaciones,
                obturados,
                odontograma,
                odontopediatria,
                ortodoncia,
                paciente_id,
                paladar,
                patologia,
                perdidos,
                periodoncia,
                periodontitis,
                piso,
                Placa_bacteriana,
                plan_tratamiento,
                procedimiento,
                Prognatismo,
                pyp,
                reabsorcion,
                rehabilitacion,
                remisiones,
                resistencia_anestesia_local,
                resistencia_otros,
                retrognatismo,
                sanos,
                sesion,
                temperatura,
                tos,
                ultima_visita_odontologo,
                fecha_registro,
                id]
        );

        if (result.affectedRows === 0)
            return res.status(404).json({ message: "Historia not found" });

        const [rows] = await pool.query("SELECT * FROM historias WHERE id = ?", [id]);

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
};

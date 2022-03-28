import Phrases from "../models/Phrases.js"; 

const agregarPhrases = async (req, res) => {
  // Evitar Verbos duplicados
  const { verb } = req.body;
  const existePhrase = await Phrases.findOne({ verb });

  if (existePhrase) {
    const error = new Error("Verbo ya registrado");
    return res.status(400).json({ msg: error.message });
  }

  try {
    const phrase = new Phrases(req.body);
    const phraseAlmacenada = await phrase.save();
    res.json({phraseAlmacenada});
  } catch (error) {
    console.log(error);
  }
};

const obtenerPhrases = async (req, res) => {
  const phrases = await Phrases.find();

  res.json(phrases);
};

const obtenerPhrase = async (req, res) => {
  const { id } = req.params;
  const phrase = await Phrases.findById(id);
  
  if (!phrase) {
    const error = new Error("Phrase no encontrada");
    return res.status(404).json({ msg: error.message });
  }

  res.json(phrase);
};

const editarPhrase = async (req, res) => {
  const { id } = req.params;
  const phrase = await Phrases.findById(id);
  
  if (!phrase) {
    const error = new Error("Phrase no encontrada");
    return res.status(404).json({ msg: error.message });
  }

  phrase.verb = req.body.verb || phrase.verb;
  phrase.type = req.body.type || phrase.type;

  try {
    const phraseAlmacenada = await phrase.save();
    res.json({phraseAlmacenada});
  } catch (error) {
    console.log(error);
  }
};

const eliminarPhrase = async (req, res) => {
  const { id } = req.params;
  const phrase = await Phrases.findById(id);
  
  if (!phrase) {
    const error = new Error("Phrase no encontrada");
    return res.status(404).json({ msg: error.message });
  }

  try {
    await phrase.deleteOne();
    res.json({msg: "Phrase Eliminada"});
  } catch (error) {
    console.log(error);
  }
};

export {
  agregarPhrases,
  obtenerPhrases,
  obtenerPhrase,
  editarPhrase,
  eliminarPhrase
}
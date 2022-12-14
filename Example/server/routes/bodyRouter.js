const router = require('express').Router();
const { User_body } = require('../db/models');

router.post('/', async (req, res) => {
  const {
    gender, weigth, age, height, mission, activity
  } = req.body;

  let fats;
  let carbohidrates;
  let protein;

  if (mission === 'slim') {
    protein = Math.round(weigth * 1.25);
    fats = Math.round(weigth * 1.1);
    carbohidrates = Math.round(weigth * 3.5);
  } else if (mission === 'save') {
    protein = Math.round(weigth * 1.35);
    fats = Math.round(weigth * 1.35);
    carbohidrates = Math.round(weigth * 4.5);
  } else if (mission === 'gain') {
    protein = Math.round(weigth * 1.5);
    fats = Math.round(weigth * 1.75);
    carbohidrates = Math.round(weigth * 5.5);
  }

  let calories;
  if (gender === 'male') {
    calories = Math.round((10 * weigth + 6.25 * height - 5 * age + 5) * activity);
  } else {
    calories = Math.round((10 * weigth + 6.25 * height - 5 * age - 161) * activity);
  }

  const bodyData = await User_body.create({
    // user_id: req.session.user_id, // проверить запись на req.session
    gender,
    weigth,
    age,
    height,
    mission,
    activity,
    calories_needed: calories,
    protein_needed: protein,
    fats_needed: fats,
    carbohidrates_needed: carbohidrates,

  });
  res.json(bodyData);
});// ручка запись в базу данных о состоянии тела и рассчет нормы калорий

module.exports = router;

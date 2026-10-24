function findMax(arr) {
  if (arr.length === 0) return 0;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function filterHighGrowth(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 20) {
      result.push(arr[i]);
    }
  }
  return result;
}

function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function calculateAverage(arr) {
  if (arr.length === 0) return 0;
  return calculateSum(arr) / arr.length;
}

function calculateLowGrowthStats(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 5) {
      count++;
    }
  }
  const share = arr.length > 0 ? count / arr.length : 0;
  return {
    count: count,
    share: share
  };
}

function parseForecastsInput(input) {
  const defaultForecasts = [3, 5, 22, 35, 55];
  if (!input || !input.trim()) {
    return defaultForecasts;
  }
  const parsed = input
    .split(/[\s,;]+/)
    .map(Number)
    .filter((num) => !isNaN(num) && num >= 0 && num <= 100);

  if (parsed.length < 5 || parsed.length > 7) {
    alert('Ошибка: необходимо ввести от 5 до 7 чисел от 0 до 100. Будут использованы данные по умолчанию.');
    return defaultForecasts;
  }

  return parsed;
}

const userName = prompt('Введите ваше имя:');
const name = userName && userName.trim() ? userName.trim() : 'Гость';

alert(`Привет, ${name}!`);

const rawInput = prompt(
  'Введите 5–7 значений прогнозируемого годового роста в % (от 0 до 100):',
  '3, 5, 22, 35, 55'
);
const forecasts = parseForecastsInput(rawInput);

const maxGrowth = findMax(forecasts);
const highGrowth = filterHighGrowth(forecasts);
const averageGrowth = calculateAverage(forecasts);
const lowStats = calculateLowGrowthStats(forecasts);

const avgFormatted = Number.isInteger(averageGrowth) ? averageGrowth : averageGrowth.toFixed(1);
const sharePercent = Number.isInteger(lowStats.share * 100) ? (lowStats.share * 100) : (lowStats.share * 100).toFixed(1);

alert(`Средний прогнозируемый рост – ${avgFormatted}%, ${highGrowth.length} прогнозов – высокие.`);

console.log(`Доля низких прогнозов: ${sharePercent}% (${lowStats.share})`);
console.log(`Количество низких прогнозов: ${lowStats.count}`);

if (maxGrowth > 50) {
  console.log('Некоторые прогнозы выглядят очень амбициозно!');
}

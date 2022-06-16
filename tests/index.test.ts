import PlateVerifier from "../src/picoPlaca/PlateVerifier";

const plateTest = new PlateVerifier();
 
describe('testing pico y placa predictor', () => {
  test('should result in true, meaning the car is restricted', () => {
    expect(plateTest.picoPlacaPredictor("abc-1235",new Date("06/15/2022"),"17:23")).toBe(true);
  });
  test('should result in false, meaning the car is not restricted', () => {
    expect(plateTest.picoPlacaPredictor("abc-1237",new Date("06/19/2022"),"13:17")).toBe(false);
  });
});
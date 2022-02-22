import { test, expect } from '@playwright/test';

test('Formulário', async ({ page }) => {
  // Go to https://finanzero.com.br/
  await page.goto('https://finanzero.com.br/', {timeout: 3000});
  await page.screenshot({ path: 'screenshots/0001home.png' });
  // Click text=Entendi
  await page.click('text=Entendi');
  await page.screenshot({ path: 'screenshots/002entendi.png' });
  // Click .rc-slider-step
  await page.click('.rc-slider-step');
  // Click text=Avançar com R$ 20.500
  const avancarButton = page.locator('#root > div > form > div > div:nth-child(1) > div > div > div:nth-child(3) > div')

  await avancarButton.click();

  await page.screenshot({ path: 'screenshots/003avançar.png' });

  await expect(page).toHaveURL('https://finanzero.com.br/?wizfluxoDeProduto=rendaMensal');
  // Click #root >> text=Sim
  await page.click('#root >> text=Sim');

  await page.screenshot({ path: 'screenshots/004sim.png' });
  await expect(page).toHaveURL('https://finanzero.com.br/?wizfluxoDeProduto=hasVehicle');
  // Click text=Não
  await page.click('text=Não');
  await page.screenshot({ path: 'screenshots/005nao.png' });
  await expect(page).toHaveURL('https://finanzero.com.br/?wizfluxoDeProduto=parcelasCP');
  // Click text=18 meses
  await page.click('text=18 meses');
  await page.screenshot({ path: 'screenshots/006-18.png' });
  // Click text=Avançar (18 meses)
  await page.click('text=Avançar (18 meses)');
  await expect(page).toHaveURL('https://finanzero.com.br/?wizfluxoDeProduto=finalFormPage');
  await page.screenshot({ path: 'screenshots/007final.png' });
});

import { test, expect, devices } from "@playwright/test";

// test.use({
//   ...devices.desktop,
//   ...devices.mobile,
//   ...devices["iPhone 11 Pro"],
//   ...devices["iPhone 11 Pro Max"],
// });

test.use({
  ...devices["iPhone 13 Mini"],
  ...devices["Desktop Chrome"]
});

test("Formulário", async ({ page }) => {
  // Acessa a página https://finanzero.com.br/ após um tempo de espera
  await page.goto("https://finanzero.com.br/" /*, { timeout: 3000 } */);
  await page.screenshot({ path: "screenshots/0001home.png" });
  // Aceita os cookies
  await page.click("text=Entendi");
  await page.screenshot({ path: "screenshots/002entendi.png" });
  // Move o slider para escolher o valor de R$ 20.500,00
  await page.click(".rc-slider-step");
  // Aceita avançar com R$ 20.500
  const avancarButton = page.locator(
    "#root > div > form > div > div:nth-child(1) > div > div > div:nth-child(3) > div"
  );

  await avancarButton.click();

  await page.screenshot({ path: "screenshots/003avançar.png" });

  await expect(page).toHaveURL(
    "https://finanzero.com.br/?wizfluxoDeProduto=rendaMensal"
  );
  // Concorda com o valor da renda mensal
  await page.click("#root >> text=Sim");

  await page.screenshot({ path: "screenshots/004sim.png" });
  await expect(page).toHaveURL(
    "https://finanzero.com.br/?wizfluxoDeProduto=hasVehicle"
  );
  // Discorda da opção de carro
  await page.click("text=Não");
  await page.screenshot({ path: "screenshots/005nao.png" });
  await expect(page).toHaveURL(
    "https://finanzero.com.br/?wizfluxoDeProduto=parcelasCP"
  );
  // Escolhe a duracao de 18 meses
  await page.click("text=18 meses");
  await page.screenshot({ path: "screenshots/006-18.png" });
  // Avança (18 meses)
  await page.click("text=Avançar (18 meses)");
  await expect(page).toHaveURL(
    "https://finanzero.com.br/?wizfluxoDeProduto=finalFormPage"
  );
  await page.screenshot({ path: "screenshots/007final.png" });

  // Seleciona o campo de nome
  await page.locator('[placeholder="Digite\\ o\\ seu\\ nome\\ aqui"]').click();
  // Preenche o nome
  await page
    .locator('[placeholder="Digite\\ o\\ seu\\ nome\\ aqui"]')
    .fill("Alfredo Farias");
  await page.screenshot({ path: "screenshots/008nome.png" });
  // Seleciona o campo de CPF
  await page.locator('[placeholder="___\\.___\\.___-__"]').click();
  // Preenche o CPF
  await page.locator('[placeholder="___\\.___\\.___-__"]').fill("98664466033");
  await page.screenshot({ path: "screenshots/009cpf.png" });
  // Define estado civil
  await page.locator('select[name="civilStatus"]').selectOption("married");
  await page.screenshot({ path: "screenshots/010estado-civil.png" });
  // Seleciona dia de nascimento
  await page.locator('select[name="DD_birthDate"]').selectOption("17");
  await page.screenshot({ path: "screenshots/011data-nascimento.png" });
  // Seleciona mes de nascimento
  await page.locator('select[name="MM_birthDate"]').selectOption("7");
  await page.screenshot({ path: "screenshots/012data-nascimento.png" });
  // Select ano de nascimento
  await page.locator('select[name="YY_birthDate"]').selectOption("1988");
  await page.screenshot({ path: "screenshots/013data-nascimento.png" });
  // Seleciona tipo de contrato
  await page
    .locator('select[name="workStatus"]')
    .selectOption("independent-contractor");
  await page.screenshot({ path: "screenshots/014estado-trabalho.png" });
  // Seleciona o campo de telefone
  await page.locator('[placeholder="\\(__\\)\\ _____\\ ____"]').click();
  await page.screenshot({ path: "screenshots/015data-inicio-trabalho.png" });
  // Preenche o telefone
  await page
    .locator('[placeholder="\\(__\\)\\ _____\\ ____"]')
    .fill("11987654321");
  await page.screenshot({ path: "screenshots/016telefone.png" });
  // Seleciona o campo email
  await page
    .locator('[placeholder="joao\\.carlos\\@exemplo\\.com\\.br"]')
    .click();

  // Preenche o email
  await page
    .locator('[placeholder="joao\\.carlos\\@exemplo\\.com\\.br"]')
    .fill("alfredo@gmail.com");
  await page.screenshot({ path: "screenshots/017email.png" });
  // Finaliza o preenchimento do formulário inicial
});

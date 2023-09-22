import { Container, Grid, Typography } from "@mui/material";
import ToTen from "./ToTen";
import ToSome from "./ToSome";

const Main = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" fontWeight={700} color="initial">
        Завдання 1.1
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={9}>
          <Typography variant="body1" display="flex" justifyContent="center">
            Визначення варіанту:
          </Typography>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={9}>
          <Typography variant="body1">
            1) Напишіть вашу дату народження.
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body1">1) 20.05.2005</Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="body1">
            2) Порахуйте три числа: X=день вашого народження, Y=сума дня та
            місяця вашого народження, З=сума року та дня вашого народження
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body1">2) X=20, Y=25, З=2025</Typography>
        </Grid>
      </Grid>
      <Typography variant="h6" color="initial">
        Завдання:
      </Typography>
      <ul>
        <li>
          1. Переведіть у двійкову систему десяткові числа X, Y, Z.
          <hr />
          <ToSome numberP={20} base={2} />
          <hr />
          <ToSome numberP={25} base={2} />
          <hr />
          <ToSome numberP={2025} base={2} />
          <hr />
        </li>
        <li>
          2. Переведіть у 10-у СЧ двійкові числа, визначенні у завданні 1.
          <hr />
          <ToTen numberP={10100} base={2} />
          <hr />
          <ToTen numberP={11001} base={2} />
          <hr />
          <ToTen numberP={11111101001} base={2} />
          <hr />
        </li>
        <li>
          3. Переведіть у 8-у СЧ двійкові числа, визначенні у завданні 1.
          <hr />
          <ToSome numberP={20} base={8} />
          <hr />
          <ToSome numberP={25} base={8} />
          <hr />
          <ToSome numberP={2025} base={8} />
          <hr />
        </li>
        <li>
          4. Переведіть у 2 СЧ числа, визначенні у завданні 3.
          <hr />
          <ToTen numberP={24} base={8} />
          <hr />
          <ToTen numberP={31} base={8} />
          <hr />
          <ToTen numberP={3751} base={8} />
          <hr />
        </li>
        <li>
          5. Переведіть у 16 СЧ двійкові числа, визначенні у завданні 1.
          <hr />
          <ToSome numberP={20} base={16} />
          <hr />
          <ToSome numberP={25} base={16} />
          <hr />
          <ToSome numberP={2025} base={16} />
          <hr />
        </li>
        <li>
          6. Переведіть у 2 СЧ числа, визначенні у завданні 5.
          <hr />
          <ToTen numberP={14} base={16} />
          <ToSome numberP={20} base={2} />
          <hr />
          <ToTen numberP={19} base={16} />
          <ToSome numberP={25} base={2} />
          <hr />
          <ToTen numberP={"7E9"} base={16} />
          <ToSome numberP={2025} base={2} />
          <hr />
        </li>
        <li>
          7. Яке максимальне число можна представити в двійковій системі
          п'ятнадцятьма цифрами? <br />
          111111111111111
        </li>
      </ul>
      <Typography
        variant="h4"
        align="center"
        fontWeight={700}
        color="initial"
        my={2}
      >
        Завдання 1.2
      </Typography>
      <Typography>
        А) Виконайте переклад з 10СЧ у 2, 8 та 16 СЧ. Перевірте правильність
        обчислень переведенням числа з 2, 8 чи 16СЧ у десяткову систему
        числення. <br /> Б) Виконайте переклад з 2СЧ у 10СЧ.
        <br /> В) Виконайте переклад з 8СЧ та 16СЧ у 10СЧ
        <br />
        Варіант №22
      </Typography>

      <hr />
      <Typography
        variant="h6"
        align="center"
        fontWeight={700}
        color="initial"
        my={2}
      >
        А:
      </Typography>
      <hr />
      <ol>
        <li>
          а)563
          <span style={{ fontSize: "0.8em", verticalAlign: "sub" }}>10</span>
          <hr />
          <ToSome numberP={563} base={2} />
          <hr />
          <ToSome numberP={563} base={8} />
          <hr />
          <ToSome numberP={563} base={16} />
          <hr />
        </li>
        <li>
          б)264
          <span style={{ fontSize: "0.8em", verticalAlign: "sub" }}>10</span>
          <hr />
          <ToSome numberP={264} base={2} />
          <hr />
          <ToSome numberP={264} base={8} />
          <hr />
          <ToSome numberP={264} base={16} />
          <hr />
        </li>
        <li>
          в)234,25
          <span style={{ fontSize: "0.8em", verticalAlign: "sub" }}>10</span>
          <hr />
          <ToSome numberP={234.25} base={2} />
          <hr />
          <ToSome numberP={234.25} base={8} />
          <hr />
          <ToSome numberP={234.25} base={16} />
          <hr />
        </li>
        <li>
          г)53,125
          <span style={{ fontSize: "0.8em", verticalAlign: "sub" }}>10</span>
          <hr />
          <ToSome numberP={53.125} base={2} />
          <hr />
          <ToSome numberP={53.125} base={8} />
          <hr />
          <ToSome numberP={53.125} base={16} />
          <hr />
        </li>
        <li>
          д)286,16
          <span style={{ fontSize: "0.8em", verticalAlign: "sub" }}>10</span>
          <hr />
          <ToSome numberP={286.16} base={2} />
          <hr />
          <ToSome numberP={286.16} base={8} />
          <hr />
          <ToSome numberP={286.16} base={16} />
          <hr />
        </li>
      </ol>
      <Typography
        variant="h6"
        align="center"
        fontWeight={700}
        color="initial"
        my={2}
      >
        Б:
      </Typography>
      <hr />
      <ol>
        <li>
          а)1100010010
          <span style={{ fontSize: "0.8em", verticalAlign: "sub" }}>2</span>
          <hr />
          <ToTen numberP={1100010010} base={2} />
          <hr />
        </li>
        <li>
          б)10011011
          <span style={{ fontSize: "0.8em", verticalAlign: "sub" }}>2</span>
          <hr />
          <ToTen numberP={10011011} base={2} />
          <hr />
        </li>
        <li>
          в)1111000001,01
          <span style={{ fontSize: "0.8em", verticalAlign: "sub" }}>2</span>
          <hr />
          <ToTen numberP={1111000001.01} base={2} />
          <hr />
        </li>
        <li>
          г)10110111,01
          <span style={{ fontSize: "0.8em", verticalAlign: "sub" }}>2</span>
          <hr />
          <ToTen numberP={10110111.01} base={2} />
          <hr />
        </li>
      </ol>
      <Typography
        variant="h6"
        align="center"
        fontWeight={700}
        color="initial"
        my={2}
      >
        В:
      </Typography>
      <hr />
      <ol>
        <li>
          а)416,1
          <span style={{ fontSize: "0.8em", verticalAlign: "sub" }}>8</span>
          <hr />
          <ToTen numberP={416.1} base={8} />
          <hr />
        </li>
        <li>
          б)215,7
          <span style={{ fontSize: "0.8em", verticalAlign: "sub" }}>16</span>
          <hr />
          <ToTen numberP={215.7} base={16} />
          <hr />
        </li>
      </ol>
    </Container>
  );
};

export default Main;

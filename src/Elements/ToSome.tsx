import { Box, Stack, Typography } from "@mui/material";
import { nanoid } from "nanoid";

interface ToSomeProps {
  numberP: number | string;
  base: number;
}

const ToSome = ({ numberP, base }: ToSomeProps) => {
  const calc1: JSX.Element[] = [];
  const calc2: JSX.Element[] = [];

  let number: number | string = numberP.toString().split(".")[0];
  let numberSecondPart = Number("0." + numberP.toString().split(".")[1]);

  const check16 = (symbol: string | number) => {
    switch (symbol) {
      case 10:
        return "A";
        break;
      case 11:
        return "A";
        break;
      case 12:
        return "C";
        break;
      case 13:
        return "D";
        break;
      case 14:
        return "E";
        break;
      case 15:
        return "F";
        break;
      default:
        return symbol;
        break;
    }
  };

  let answ = "";
  let i = 0;
  for (
    ;
    Number(number) >= base;
    number = (Number(number) - (Number(number) % base)) / base
  ) {
    calc1.push(
      <Box key={nanoid()}>
        {i > 0 && (
          <Box
            sx={{
              borderBottom: "1px solid",
              mt: `${i > 1 ? (i - 1) * 20 : 0}px`,
            }}
          >
            {base}
          </Box>
        )}
        <Box sx={{ borderRight: "1px solid" }}>{number}</Box>
        <Box sx={{ borderRight: "1px solid", borderBottom: "1px solid" }}>
          {Number(number) - (Number(number) % base)}
        </Box>
        <Box color="error.main">{check16(Number(number) % base)}</Box>
      </Box>
    );
    answ += check16(Number(number) % base);
    i++;
  }
  answ += check16(Number(number) % base);

  calc1.push(
    <Box key={nanoid()}>
      <Box
        sx={{
          borderBottom: "1px solid",
          mt: `${i > 1 ? (i - 1) * 23.2 : 0}px`,
        }}
      >
        {base}
      </Box>
      <Box color="error.main">{check16(Number(number) % base)}</Box>
    </Box>
  );

  let secAnsw = "";
  if (numberSecondPart) {
    for (let i = 0; i < 4 && numberSecondPart !== 0; i++) {
      calc2.push(
        <Stack direction="row" key={nanoid()}>
          <Box
            sx={{ borderRight: "1px solid", borderBottom: "1px solid" }}
            color="error.main"
          >
            {check16(Math.trunc(numberSecondPart))}
          </Box>
          <Box sx={{ borderRight: "1px solid", borderBottom: "1px solid" }}>
            {(numberSecondPart - Math.trunc(numberSecondPart))
              .toFixed(3)
              .replace(/\.?0+$/, "")}
            *{base}
          </Box>
        </Stack>
      );
      secAnsw += check16(Math.trunc(numberSecondPart));
      if (numberSecondPart >= 1) {
        numberSecondPart =
          (numberSecondPart - Math.trunc(numberSecondPart)) * base;
      } else {
        numberSecondPart *= base;
      }
    }
  }

  return (
    <>
      <Stack direction="row">
        {calc1}
        <Stack direction="column" ml={2}>
          {calc2}
        </Stack>
      </Stack>
      <Typography color="error.main">
        {answ.split("").reverse().join("")}
        {secAnsw &&
          `.${secAnsw
            .slice(1)
            .substring(0, 3)
            .replace(/\.?0+$/, "")}`}
      </Typography>
    </>
  );
};

export default ToSome;

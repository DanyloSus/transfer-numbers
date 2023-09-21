import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
  Container,
  Stack,
} from "@mui/material";
import ToTen from "./ToTen";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState<string | null>(null);
  const [conversionType, setConversionType] = useState<string>("binary");
  const [to, setTo] = useState<number>(2);

  const [visual, setVisual] = useState("");
  const [visualT, setVisualT] = useState(2);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleConversionTypeChange = (e: any) => {
    setConversionType(
      e.target.value as
        | "binary"
        | "quadruple"
        | "octal"
        | "decimal"
        | "hexadecimal"
    );
  };

  const parseFloatWithRadix = (s: any, r: number) => {
    r = (r || 10) | 0;
    const [b, a] = ((s || "0") + ".").split(".");
    const l1 = parseInt("1" + (a || ""), r).toString(r).length;
    return (
      parseInt(b, r) +
      parseInt(a || "0", r) / parseInt("1" + Array(l1).join("0"), r)
    );
  };

  const convertNumber = () => {
    const inputValueTrimmed = inputValue.trim();
    let result: string | null = null;

    switch (conversionType) {
      case "binary":
        if (/^[01]+(\.[01]*)?$/.test(inputValueTrimmed)) {
          result = parseFloatWithRadix(inputValueTrimmed, 2).toString(to);
          setVisualT(2);
        }
        break;
      case "quadruple":
        if (/^[0123]+(\.[0123]*)?$/.test(inputValueTrimmed)) {
          result = parseFloatWithRadix(inputValueTrimmed, 4).toString(to);
          setVisualT(4);
        }
        break;
      case "octal":
        if (/^[0-7]+(\.[0-7]*)?$/.test(inputValueTrimmed)) {
          result = parseFloatWithRadix(inputValueTrimmed, 8).toString(to);
          setVisualT(8);
        }
        break;
      case "decimal":
        if (/^\d+(\.\d*)?$/.test(inputValueTrimmed)) {
          result = parseFloatWithRadix(inputValueTrimmed, 10).toString(to);
          setVisualT(10);
        }
        break;
      case "hexadecimal":
        if (/^[0-9A-Fa-f]+(\.[0-9A-Fa-f]*)?$/.test(inputValueTrimmed)) {
          result = parseFloatWithRadix(inputValueTrimmed, 16).toString(to);
          setVisualT(16);
        }
        break;
      default:
        break;
    }

    setOutputValue(result);
    setVisual(inputValue);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">
        Конвертер чисел з{" "}
        {conversionType === "binary"
          ? "двійкової"
          : conversionType === "decimal"
          ? "десяткової"
          : conversionType === "hexadecimal"
          ? "шістнадцяткової"
          : conversionType === "octal"
          ? "вісімкової"
          : "четвіркової"}{" "}
        системи числення
      </Typography>
      <Stack direction="column" gap={2}>
        <FormControl variant="outlined" fullWidth sx={{ mt: 2 }}>
          <InputLabel id="from">З</InputLabel>
          <Select
            labelId="from"
            id="from"
            label="З"
            value={conversionType}
            onChange={handleConversionTypeChange}
          >
            <MenuItem value="binary">Двійкова</MenuItem>
            <MenuItem value="quadruple">Четвіркова</MenuItem>
            <MenuItem value="octal">Вісімкова</MenuItem>
            <MenuItem value="decimal">Десяткова</MenuItem>
            <MenuItem value="hexadecimal">Шістнадцяткова</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Введіть число"
          variant="outlined"
          fullWidth
          value={inputValue}
          onChange={handleInputChange}
        />
        <FormControl>
          <InputLabel id="to">У</InputLabel>
          <Select
            labelId="to"
            id="to"
            value={to}
            onChange={(e: any) => {
              setTo(Number(e.target.value));
            }}
            label="У"
          >
            <MenuItem value="2">Двійкова</MenuItem>
            <MenuItem value="4">Четвіркова</MenuItem>
            <MenuItem value="8">Вісімкова</MenuItem>
            <MenuItem value="10">Десяткова</MenuItem>
            <MenuItem value="16">Шістнадцяткова</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Button
        variant="contained"
        color="primary"
        onClick={convertNumber}
        sx={{ mt: 2 }}
      >
        Перевести
      </Button>
      {outputValue !== null && (
        <Typography variant="h6" color="error.main">
          Результат: {outputValue}
        </Typography>
      )}
      {outputValue === null && inputValue && (
        <Typography variant="body1" color="error">
          Некоректне введення
        </Typography>
      )}
      {outputValue !== null && visual !== "" && to === 10 && visualT && (
        <ToTen numberP={visual} base={visualT} />
      )}
      {outputValue !== null &&
        visual !== "" &&
        to !== 10 &&
        visualT &&
        conversionType !== "decimal" && (
          <ToTen numberP={visual} base={visualT} />
        )}
    </Container>
  );
};

export default Calculator;

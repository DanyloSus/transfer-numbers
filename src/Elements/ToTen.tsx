import { nanoid } from "nanoid";

interface ToTenProps {
  numberP: number | string;
  base: number;
}

const ToTen = ({ numberP, base }: ToTenProps) => {
  const calc1: JSX.Element[] = [];
  const calc2: JSX.Element[] = [];
  const calc3: JSX.Element[] = [];

  let number = numberP.toString().split(".")[0];
  let numberSecondPart = numberP.toString().split(".")[1];

  const parseFloatWithRadix = (s: any, r: number) => {
    r = (r || 10) | 0;
    const [b, a] = ((s || "0") + ".").split(".");
    const l1 = parseInt("1" + (a || ""), r).toString(r).length;
    return (
      parseInt(b, r) +
      parseInt(a || "0", r) / parseInt("1" + Array(l1).join("0"), r)
    );
  };

  const check16 = (symbol: string | number) => {
    switch (symbol) {
      case "A":
        return 10;
        break;
      case "B":
        return 11;
        break;
      case "C":
        return 12;
        break;
      case "D":
        return 13;
        break;
      case "E":
        return 14;
        break;
      case "F":
        return 15;
        break;
      default:
        return symbol;
        break;
    }
  };

  let step = number.toString().length - 1;
  for (let i = 0; i < number.toString().length; i++) {
    calc1.push(
      <span key={nanoid()}>
        {check16(number.toString()[i])}x{base}
        <span style={{ fontSize: "0.8em", verticalAlign: "super" }}>
          {step}
        </span>
        {step !== 0 && " + "}
      </span>
    );
    step--;
  }

  step = number.toString().length - 1;
  for (let i = 0; i < number.toString().length; i++) {
    calc2.push(
      <span key={nanoid()}>
        {Number(check16(number.toString()[i]))}x{base ** step}
        {step !== 0 && " + "}
      </span>
    );
    step--;
  }

  step = number.toString().length - 1;
  for (let i = 0; i < number.toString().length; i++) {
    calc3.push(
      <span key={nanoid()}>
        {Number(check16(number.toString()[i])) * base ** step}
        {step !== 0 && " + "}
      </span>
    );
    step--;
  }

  if (numberSecondPart) {
    step = -1;
    for (let i = 0; i < numberSecondPart.toString().length; i++) {
      calc1.push(
        <span key={nanoid()}>
          {" + "}
          {check16(numberSecondPart.toString()[i])}x{base}
          <span style={{ fontSize: "0.8em", verticalAlign: "super" }}>
            {step}
          </span>
        </span>
      );
      step--;
    }

    step = -1;
    for (let i = 0; i < numberSecondPart.toString().length; i++) {
      calc2.push(
        <span key={nanoid()}>
          {" + "}
          {Number(check16(numberSecondPart.toString()[i]))}x{base ** step}
        </span>
      );
      step--;
    }

    step = -1;
    for (let i = 0; i < numberSecondPart.toString().length; i++) {
      calc3.push(
        <span key={nanoid()}>
          {" + "}
          {Number(check16(numberSecondPart.toString()[i])) * base ** step}
        </span>
      );
      step--;
    }
  }

  return (
    <>
      <span style={{ color: "#d32f2f" }}>
        {numberP}
        <span style={{ fontSize: "0.8em", verticalAlign: "sub" }}>{base}</span>
      </span>{" "}
      = {calc1} = {calc2} = {calc3} ={" "}
      <span style={{ color: "#d32f2f" }}>
        {parseFloatWithRadix(numberP.toString(), base).toString(10)}
        <span style={{ fontSize: "0.8em", verticalAlign: "sub" }}>10</span>
      </span>
    </>
  );
};

export default ToTen;

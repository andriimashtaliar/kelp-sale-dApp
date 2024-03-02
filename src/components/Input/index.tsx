import React from "react";

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onPaste?: (e: React.ClipboardEvent<HTMLInputElement>) => void;
  onTouch?: (e: React.TouchEvent<HTMLInputElement>) => void;
};

const Input = ({
  value,
  onChange,
  onKeyUp,
  onKeyDown,
  onTouch,
  onPaste,
  onClick,
}: InputProps) => {
  return (
    <div className="relative flex items-center justify-center w-fit gap-x-1 text-slate-800">
      <label htmlFor="input-amount-value" className="text-slate-600">
        $
      </label>
      <input
        id="input-amount-value"
        className="w-24 max-w-fit focus:outline-none placeholder:text-slate-800 text-slate-800 text-4xl bg-transparent font-medium text-center"
        step="0.01"
        pattern="^\d+(\.\d{1,2})?$"
        placeholder="0.00"
        type="text"
        inputMode="decimal"
        min={0.0}
        onClick={onClick}
        value={value}
        onChange={onChange}
        onTouchStart={onTouch}
        onPaste={onPaste}
        onKeyUp={onKeyUp}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default Input;

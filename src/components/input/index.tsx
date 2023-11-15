import { InputHTMLAttributes, RefObject } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    label?: string;
    htmlType?: string;
    error?: string;
    value?: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    options?: {
        value: string;
        label: string;
    }[];
    pattern?: string;
    isError?: boolean;
    inputRef?: RefObject<HTMLInputElement>;
    MaxLength?: number;
    hidden?: boolean;
    disabled?: boolean;
    required?: boolean;
    name?: string;
    id?: string;
    type?: string;
    success?: boolean;
    defaultValue?: string;
}

export default function Input({
    label,
    className,
    htmlType,
    error,
    value,
    placeholder,
    onChange,
    onKeyDown,
    onBlur,
    options,
    pattern,
    isError,
    inputRef,
    MaxLength,
    hidden,
    disabled,
    required,
    name,
    id,
    type,
    success,
    defaultValue,
}: InputProps) {
    return (
        <>
            {type !== "select" && <div className="w-full">
                <label
                    htmlFor={id}
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >{label}
                </label>
                <input
                    type={htmlType}
                    name={name}
                    id={id}
                    className={twMerge("bg-[#43366A] border border-gray-500 text-white text-sm rounded-lg  block w-full p-2.5", className)}
                    placeholder={placeholder}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    onBlur={onBlur}
                    value={value}
                    ref={inputRef}
                    pattern={pattern}
                    maxLength={MaxLength}
                    required
                />
                {error && (
                    <p className="mt-2 text-xs text-red-600">
                        <span className="font-medium">{error}</span>
                    </p>
                )}
            </div>}
            {
                type === "select" && (
                    <div className="flex flex-col gap-2 w-full ">
                        {label && (
                            <label
                                htmlFor="countries"
                                className="block text-sm font-medium text-gray-900 dark:text-black"
                            >
                                {label}
                            </label>
                        )}
                        <select
                            id="countries"
                            className={twMerge(
                                "block w-full rounded-lg bg-transparent border-2 border-tertiary-200 text-black px-2 py-2",
                                className
                            )}
                            value={value}
                            defaultValue={defaultValue}
                            onChange={(e: any) => {
                                onChange && onChange(e);
                            }}
                        >
                            {options &&
                                options.map((item, i) => {
                                    return (
                                        <option
                                            key={i}
                                            className="w-full px-4 py-2 border-b"
                                            value={item.value}
                                        >
                                            {item.label}
                                        </option>
                                    );
                                })}
                        </select>
                    </div>
                )
            }
        </>
    );
}

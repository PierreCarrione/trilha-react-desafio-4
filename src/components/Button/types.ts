// export interface IButtonProps {
//     title: string;
//     onClick?: () => void;
//     //onClick?: React.MouseEventHandler<HTMLButtonElement>;
// }
export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    onClick?: () => void;
    disable?: boolean;
    //onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
import { Header } from "../organisms/layout/Header";

type Props = {
    children?: React.ReactNode;
};

export const HeaderLayout: React.FC<Props> = (({ children }) => {
    // const { children } = props;
    return (
    <>
        <Header />
        {children}
    </>
    )
});
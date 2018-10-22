import { Theme } from "src/components/mui/style";


export interface IAppTheme {
    lightTheme: Theme,
    darkTheme: Theme
}

export class AppTheme {

    constructor(public light: Theme, public dark: Theme) { }

    public getTheme(type: string) {
        return type === "light" ? this.light : this.dark;
    }
}
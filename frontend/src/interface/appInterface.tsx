export interface RegisterData{
    f_name:string;
    l_name:string;
    email:string;
    password:string;
    confirm_password:string;
}

export interface LoginData {
    email: string;
    password: string;
}
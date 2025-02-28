import S from './style';
import { UserListTable } from "./UserListTable";
import { serverAPI } from "@/api/axios";

const Admin = () => {

    return (
        <S.APIManagerContainer>
            <UserListTable />
        </S.APIManagerContainer>
    );
}

export default Admin;


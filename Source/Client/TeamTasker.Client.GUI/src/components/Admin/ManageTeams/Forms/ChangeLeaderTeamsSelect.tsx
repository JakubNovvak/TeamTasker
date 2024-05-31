import React, { useState, useEffect } from 'react';
import { AxiosOptions } from '../../../Types/AxiosOptions';
import { Option, Select } from '@mui/joy';
import { FormControl } from '@mui/material';
import { FormikChangeTeamSetValue } from '../../../Types/CommonTypes';
import { ReadTeamDto } from '../../../Types/ReadTeamDto';
import { GetUserNameAndEmail } from '../TeamsApi';
import APIUrlConfig from '../../../Connection/API/APIUrlConfig';

//TODO: Create generic Employees Select component. This in only a temporary, development solution

export default function ChangeLeaderTeamsSelect({FormikValue, formikSetValue, idName, setCurrentLeader}: 
                                                {FormikValue: number, formikSetValue: FormikChangeTeamSetValue, idName: string, setCurrentLeader: React.Dispatch<React.SetStateAction<string>>})
{
    const [teams, setTeams] = useState<ReadTeamDto[]>([]);

    useEffect(() => {
        APIUrlConfig.get<ReadTeamDto[]>(`/api/Team/GetAllTeams`, AxiosOptions)
            .then(response => 
                {
                setTeams(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Błąd podczas pobierania danych z API:', error);
            });
    }, []);

    return(
        <>
            <FormControl>
                <Select placeholder="Select Team" value={FormikValue} onChange={(event, value) => {formikSetValue(idName, value), event; GetUserNameAndEmail(setCurrentLeader, value)}} sx={{minWidth: "18rem"}}>
                    {teams.map(team => (
                        <Option key={team.id} value={team.id}>
                            {team.name}
                        </Option>
                    ))}
                </Select>
            </FormControl>
        </>
    );
}
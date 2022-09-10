import React, { useState, ChangeEvent, useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import AuthInput from "../AuthInput/AuthInput";
import axios from "axios";

interface InscriptionValues {
    firstname: undefined | string;
    lastname: undefined | string;
    email: undefined | string;
    password: undefined | string;
    city: undefined | string;
}

const InscriptionForm = () => {
    const { state, dispatch } = useContext(AuthContext);
    const [inscriptionInfos, setInscriptionInfos] = useState<InscriptionValues>(
        {
            firstname: undefined,
            lastname: undefined,
            email: undefined,
            password: undefined,
            city: undefined,
        }
    );
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InscriptionValues>({ mode: "onChange" });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInscriptionInfos((prev) => ({
            ...prev,
            [e.target.id]: e.target.value.toLowerCase(),
        }));
    };

    const emailField = register("email", { required: true });
    const passwordField = register("password", { required: true });
    const firstnameField = register("firstname", { required: true });
    const lastnameField = register("lastname", { required: true });
    const cityField = register("city", { required: true });

    const onChangeEmail = (e: any) => {
        emailField.onChange(e);
        handleChange(e);
    };
    const onChangePassword = (e: any) => {
        passwordField.onChange(e);
        handleChange(e);
    };
    const onChangefirstname = (e: any) => {
        firstnameField.onChange(e);
        handleChange(e);
    };
    const onChangelastname = (e: any) => {
        lastnameField.onChange(e);
        handleChange(e);
    };
    const onChangeCity = (e: any) => {
        cityField.onChange(e);
        handleChange(e);
    };
    const inscriptionsInputs = [
        {
            inputPlaceholder: "Votre nom",
            inputType: "text",
            inputId: "lastname",
            nameField: lastnameField,
            formErrors: errors.lastname,
            textError: "Nom requis",
            onChange: onChangefirstname,
        },
        {
            inputPlaceholder: "Votre prénom",
            inputType: "text",
            inputId: "firstname",
            nameField: firstnameField,
            formErrors: errors.firstname,
            textError: "Prénom requis",
            onChange: onChangelastname,
        },
        {
            inputPlaceholder: "Votre ville",
            inputType: "text",
            inputId: "city",
            nameField: cityField,
            formErrors: errors.city,
            textError: "Ville requise",
            onChange: onChangeCity,
        },
        {
            inputPlaceholder: "Votre addresse mail",
            inputType: "email",
            inputId: "email",
            nameField: emailField,
            formErrors: errors.email,
            textError: "Addresse mail requise",
            onChange: onChangeEmail,
        },
        {
            inputPlaceholder: "Choisissez un mot de passe",
            inputType: "password",
            inputId: "password",
            nameField: passwordField,
            formErrors: errors.password,
            textError: "Mot de passe requis",
            onChange: onChangePassword,
        },
    ];
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const navigate = useNavigate();

    const onSubmit = async (e: any) => {
        dispatch({ type: "LOGIN_START", payload: null });
        try {
            const response = await axios.post(
                `${baseUrl}auth/register`,
                inscriptionInfos
            );
            dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
            navigate("/profile", { replace: true });
        } catch (error) {
            dispatch({ type: "LOGIN_FAILURE", payload: null });
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="co-form">
            {inscriptionsInputs.map((inscriptionInput) => (
                <AuthInput
                    key={inscriptionInput.inputId}
                    inputPlaceholder={inscriptionInput.inputPlaceholder}
                    inputType={inscriptionInput.inputType}
                    inputId={inscriptionInput.inputId}
                    nameField={inscriptionInput.nameField}
                    formErrors={inscriptionInput.formErrors}
                    textError={inscriptionInput.textError}
                    onChange={inscriptionInput.onChange}
                />
            ))}
            {state.loading ? (
                <button className="loading">CHARGEMENT ...</button>
            ) : (
                <button type="submit" className="connect-btn">
                    S'INSCRIRE
                </button>
            )}
        </form>
    );
};

export default InscriptionForm;

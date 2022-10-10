import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../context/AuthContext";
import { userService } from "../../../services/userService";
import IUser from "../../../types/IUser";
import SearchBarGuest from "./searchBarGuest/SearchBarGuest";
import ToggleSwitch from "../../UI/ToggleSwitch/ToggleSwitch";
import "./formRender.css";
import { roomService } from "../../../services/roomService";
import CreateNewRoomLocation from "./createNewRoomLocation/CreateNewRoomLocation";
import CreateNewRoomCalendar from "./createNewRoomCalendar/CreateNewRoomCalendar";
import CreateNewRoomParticipants from "./createNewRoomParticipants/CreateNewRoomParticipants";
import ListPeopleInvited from "./ListPeopleInvited/ListPeopleInvited";
import CreateNewRoomTitle from "./createNewRoomTitle/CreateNewRoomTitle";
import { BiBeer, TbBrandAirtable, RiShirtLine, BiReset } from "../../../icons";
import { useNavigate } from "react-router-dom";
import { IRoom } from "../../../types/IRoom";


type RoomFormValues = {
    placeName: string;
    address: string;
    date: Date;
    time: string;
    partIds: string[];
    aperoWheelSetUp: boolean;
    dresscodeSetUp: boolean;
    dresscodeDescription: string;
};

const FormRender: React.FC<unknown> = () => {
    const [dataRooms, setDataRooms] = useState<IRoom | {}>({});
    const [friendsIdSelected, setFriendsIdSelected] = useState<string[]>([]);
    const [friendsList, setfriendsList] = useState<IUser[]>([]);

    const { state } = useContext(AuthContext);
    const userId = state.user?._id;

    const navigate = useNavigate();

    /**
     * on récupère les informations <nom, prénom, userImg, _id> des amis de l'utilisateur à l'initialisation du composant, que l'on enregistre dans le state <friendsList>
     */
    useEffect(() => {
        const fetchFriendList = async () => {
            const friendsList = await userService.getFriendsByUserId(userId!);
            setfriendsList(friendsList.data.friendsId);
        };
        fetchFriendList();
    }, [userId]);

    /**
     * on ajoute des propriétés par défaut au state <dataRooms> à l'initialisation du composant
     */
    useEffect(() => {
        setDataRooms((prev: Object) => ({
            ...prev,
            theme: "restaurant",
            creatorId: userId,
            aperoWheelSetUp: false,
            dresscodeSetUp: false,
        }));
    }, [userId]);

    /**
     * on met à jour la propriété <partIds> du state en ajoutant les id des amis sélectionnés quand le state <friendsIdSelected> est modifié
     */
    useEffect(() => {
        setDataRooms((prev: Object) => ({
            ...prev,
            partIds: friendsIdSelected,
        }));
    }, [friendsIdSelected]);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<RoomFormValues>({ mode: "onChange" });

    const placeName = register("placeName", { required: true });
    const address = register("address", { required: true });
    const date = register("date", { required: true });
    const time = register("time", { required: true });
    const partIds = register("partIds");
    const aperoWheelSetUp = register("aperoWheelSetUp");
    const dresscodeSetUp = register("dresscodeSetUp");
    const dresscodeDescription = register("dresscodeDescription");

    /**
     * Met à jour la propriété correspondante à l'input dans le state <dataRooms> quand l'utilisateur modifie cet input
     * @param e ChangeEvent qui occure lorsque l'utilisateur modifie le contenu d'un <input>
     */
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDataRooms((prev: Object) => ({
            ...prev,
            [e.target.id]: e.target.value.toLowerCase(),
        }));
    };

    /**
     * Met à jour la propriété correspondante au toggle dans le state <dataRooms> quand l'utilisateur clique sur le toggle
     * @param e ChangeEvent qui occure lorsque l'utilisateur clique sur le toggle
     */
    const handleChangeToggle = (e: ChangeEvent<HTMLInputElement>) => {
        setDataRooms((prev: Object) => ({
            ...prev,
            [e.target.id]: e.target.checked,
        }));
    };

    /**
     * Lorsque l'utilisateur clique sur une des options du select, il ajoute la valeur de l'option au state <friendIdSelected> s'il n'en fait pas déjà partie et s'il n'est pas undefined
     * @param e ChangeEvent qui occure lorsque l'utilisateur clique sur un <select> élément
     */
    const handleChangeSearchBarGuest = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const friendSelected = (e.target as HTMLSelectElement).value;
        if (
            friendSelected !== undefined &&
            !friendsIdSelected.includes(friendSelected)
        ) {
            setFriendsIdSelected([...friendsIdSelected, friendSelected]);
            setValue("partIds", friendsIdSelected);
        }
    };

    const handleDeletePart = (friendId: string) => {
        let friends= [...friendsIdSelected]
        let newFriendsSelected = friends.filter((friend) => friend !== friendId)
        setFriendsIdSelected(newFriendsSelected)
    }

    const onChangePlaceName = (e: any) => {
        placeName.onChange(e);
        handleChange(e);
    };
    const onChangeAddress = (e: any) => {
        address.onChange(e);
        handleChange(e);
    };
    const onChangeDate = (e: any) => {
        date.onChange(e);
        handleChange(e);
    };
    const onChangeAperoWheelSetUp = (e: any) => {
        aperoWheelSetUp.onChange(e);
        handleChangeToggle(e);
    };
    const onChangeDrescodeSetUp = (e: any) => {
        dresscodeSetUp.onChange(e);
        handleChangeToggle(e);
    };
    const onChangeDrescodeDescription = (e: any) => {
        dresscodeDescription.onChange(e);
        handleChange(e);
    };
    const onChangePartsIds = (e: any) => {
        partIds.onChange(e);
        handleChangeSearchBarGuest(e);
    };
    const onChangeTime = (e: any) => {
        time.onChange(e);
        handleChange(e);
    };

    const friendsAddedList = friendsList.filter((friend) =>
        friendsIdSelected.includes(friend._id!)
    );

    const friendsRemoveList = friendsList.filter(
        (friend) => !friendsIdSelected.includes(friend._id!)
    );


    const onSubmit = async () => {
        if (friendsIdSelected.length > 0) {
            await roomService.createRoom({
                ...dataRooms,
                theme: "restaurant",
                creatorId: userId,
            });
            navigate('/userrooms')
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CreateNewRoomLocation
                placeName={placeName}
                address={address}
                onChangePlaceName={onChangePlaceName}
                onChangeAddress={onChangeAddress}
            />
            <CreateNewRoomCalendar
                date={date}
                time={time}
                onChangeDate={onChangeDate}
                onChangeTime={onChangeTime}
            />
            <CreateNewRoomParticipants />
            <SearchBarGuest
                nameField={partIds}
                friendsRemoveList={friendsRemoveList}
                onChange={(e) => onChangePartsIds(e)}
            />
            <ListPeopleInvited listFriendsSelected={friendsAddedList} handleDeletePart={handleDeletePart}/>
            <CreateNewRoomTitle
                icon={<BiBeer className="category-icon" />}
                titleName="Roue de l'apéro:"
            />
            <ToggleSwitch
                label="aperoWheelSetUp"
                nameField={aperoWheelSetUp}
                onChange={onChangeAperoWheelSetUp}
            />
            <CreateNewRoomTitle
                icon={<RiShirtLine className="category-icon" />}
                titleName="Dresscode:"
            />
            <ToggleSwitch
                label="dresscodeSetUp"
                nameField={dresscodeSetUp}
                onChange={onChangeDrescodeSetUp}
            />
            <CreateNewRoomTitle
                icon={<RiShirtLine className="category-icon" />}
                titleName="Description du dresscode:"
            />
            <input
                type="text"
                placeholder="Description"
                id="dresscodeDescription"
                {...dresscodeDescription}
                onChange={onChangeDrescodeDescription}
            />
            <div className="form-btns">
                <button className="form-btn" type="submit">
                    <TbBrandAirtable/>
                    Créer la salle
                </button>
                <button className="form-btn reset" type="reset">
                    <BiReset/>
                    Réinitialiser
                </button>
            </div>
        </form>
    );
};

export default FormRender;

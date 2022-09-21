import React, {
    ChangeEvent,
    Fragment,
    useContext,
    useEffect,
    useState,
} from "react";
import { useForm } from "react-hook-form";
import ButtonGeneric from "../../UI/boutons/ButtonGeneric";
import GuestLogo from "../../UI/LogoCreateRoom/GuestLogo";
import LogoApero from "../../UI/LogoCreateRoom/LogoApero";
import LogoCalendar from "../../UI/LogoCreateRoom/LogoCalendar";
import LogoDressCode from "../../UI/LogoCreateRoom/LogoDressCode";
import LogoLocation from "../../UI/LogoCreateRoom/LogoLocation";
import AddPeople from "./AddPeople/AddPeople";
import { AuthContext } from "../../../context/AuthContext";
import { userService } from "../../../services/userService";
import IUser from "../../../types/IUser";
import SearchBarGuest from "./searchBarGuest/SearchBarGuest";
import ToggleSwitch from "../../UI/ToggleSwitch/ToggleSwitch";
import "./form.css";

type RoomFormValues = {
    placeName: string;
    address: string;
    date: Date;
    partIds: [string];
    aperoWheelSetUp: boolean;
    dresscodeSetUp: boolean;
    dresscodeDescription: string;
};

const FormRender: React.FC<unknown> = () => {

	const [dataRooms, setDataRooms] = useState<any>({});
	
    const [list, setList] = useState<IUser[]>([]);

	const [friendIdSelected, setFriendIdSelected] = useState<string>('');
	const [friendsIdSelected, setFriendsIdSelected] = useState<string[]>([]);
	
    const { state } = useContext(AuthContext);
    const userId = state.user?._id;

    useEffect(() => {
        const fetchFriendList = async () => {
            const listFriends = await userService.getFriendsByUserId(userId!);
            setList(listFriends.data.friendsId);
        };
        fetchFriendList();
    }, [userId]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RoomFormValues>({ mode: "onChange" });

    const placeName = register("placeName", { required: true });
    const address = register("address", { required: true });
    const date = register("date", { required: true });
    const partIds = register("partIds", { required: true });
    const aperoWheelSetUp = register("aperoWheelSetUp", { required: true });
    const dresscodeSetUp = register("dresscodeSetUp", { required: true });
    const dresscodeDescription = register("dresscodeDescription", {
        required: true,
    });

	

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDataRooms((prev: any) => ({
            ...prev,
            [e.target.id]: e.target.value.toLowerCase(),
        }));
    };

	const handleChangeToggle = (e: ChangeEvent<HTMLInputElement>) => {
        setDataRooms((prev: any) => ({
            ...prev,
            [e.target.id]: e.target.checked,
        }));
    };

	const handleChangeSearchBarGuest = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		const friendSelected = (e.target as HTMLSelectElement).value;
		setFriendsIdSelected([...friendsIdSelected, friendSelected]);
	};

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


	useEffect(() => {
		if (friendIdSelected !== '')
		setFriendsIdSelected([...friendsIdSelected, friendIdSelected]);
		
	}, [friendIdSelected])

	useEffect(() => {
		setDataRooms({
			partIds: friendsIdSelected
		});

	}, [friendsIdSelected])


    const reset = () => {
        console.log("reset");
    };

    const onSubmit = async (e: any) => {
        console.log(dataRooms);
        console.log("hello");
    };
    

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <LogoLocation />
            <h3>Lieu : </h3>
            <input
                {...placeName}
                placeholder="Nom du lieu"
                type="text"
                id="placeName"
                onChange={onChangePlaceName}
            />
            <input
                {...address}
                placeholder="Adresse du lieu"
                type="text"
                name="address"
                id="address"
                onChange={onChangeAddress}
            />
            <LogoCalendar />
            <h3>Date et heure : </h3>
            <input type="date" {...date} id="date" onChange={onChangeDate} />
            <input type="time" />
            <GuestLogo />
            <AddPeople listFriends={list} />
            <SearchBarGuest
                nameField={partIds}
                friends={list}
                friendsIdSelected={friendsIdSelected}
				// onChange={handleChangeSearchBarGuest}
                onChange={(e) => onChangePartsIds(e)}
            />
            <h2>Options Supplémentaires</h2>
            <LogoApero />
            <ToggleSwitch
                label="aperoWheelSetUp"
                nameField={aperoWheelSetUp}
                onChange={onChangeAperoWheelSetUp}
            />
            <LogoDressCode />
            <ToggleSwitch
                label="dresscodeSetUp"
                nameField={dresscodeSetUp}
                onChange={onChangeDrescodeSetUp}
            />
            <h3>Dresscode</h3>
            <textarea
                {...dresscodeDescription}
                onChange={onChangeDrescodeDescription}
            />
            <ButtonGeneric
                classname=""
                type="reset"
                onClick={reset}
                btnText="Annuler"
            />
            <button className="testform" type="submit">
                Envoyer
            </button>
        </form>
    );
};

export default FormRender;

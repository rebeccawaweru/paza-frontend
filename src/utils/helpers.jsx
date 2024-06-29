import client from "../api/client";
import { toast } from "react-toastify";
export const initialState = {
  step: 1,
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Next":
      return { ...state, step: state.step + 1 };
    case "Prev":
      return { ...state, step: state.step - 1 };
    case "Reset":
      return initialState;
    default:
      return state;
  }
};

export const creator = [
  {
    name: "Visual Arts",
    category: [
      "Painters",
      "Digital Artists",
      "Illustrators",
      "Graffiti Artists",
      "3D Artists",
      "Designers",
      "Photographers",
    ],
  },
  {
    name: "Media Art",
    category: [
      "Filmmakers",
      "Animators",
      "Gamers",
      "streamers",
      "Podcasters",
      "Vloggers",
    ],
  },
  {
    name: "Music",
    category: [
      "Singers",
      "Songwriters",
      "Instrumentalists",
      "Composers",
      "DJs",
    ],
  },
  {
    name: "Performing Arts",
    category: ["Actors", "Comedians", "Dancers", "Other Live Performers"],
  },
  {
    name: "Fashion and Beauty",
    category: [
      "Fashion Designers",
      "Stylists",
      "Hair and Makeup Artists",
      "Beauty Influencers",
    ],
  },
  {
    name: "Writers, Editors, and Bloggers",
    category: ["Writers", "Editors", "Bloggers"],
  },
  {
    name: "Health and Wellness",
    category: ["Health", "Fitness", "Wellness"],
  },
  {
    name: "Personality",
    category: [
      "Social Media Influencers",
      "Brand Ambassadors",
      "Content Creator",
    ],
  },
  {
    name: "Merchandise and Crafts",
    category: ["Merchandise", "Handicrafts", "Artisanal Products"],
  },
  {
    name: "Niche Professionals",
    category: ["Chefs", "Developers", "Analyst", "Researcher", "Consultant"],
  },
  {
    name: "Lifestyle and Hobbies",
    category: ["Food Bloggers", "Travel Bloggers"],
  },
];

export const reducer2 = (state, action) => {
  switch (action.type) {
    case "HANDLE_CHANGE":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "ADD":
      return {
        ...state,
        [action.payload.arrayName]: [
          ...state[action.payload.arrayName],
          action.payload.value,
        ],
      };
    case "REMOVE":
      return {
        ...state,
        [action.payload.arrayName]: state[action.payload.arrayName].filter(
          (item) => item !== action.payload.value
        ),
      };
    case "UPLOAD":
      return {
        ...state,
        avatar: URL.createObjectURL(action.payload.file),
      };
    case "UPLOAD_SUCCESS":
      return {
        ...state,
        avatar: action.payload.value,
      };
    default:
      return state;
  }
};

export const Validity = (e) => {
  const formElement = e.target;
  const isValid = formElement.checkValidity();
  return isValid;
};

export const handleUpdate = (state2, navigate) => {
  const user = JSON.parse(localStorage.getItem("user")) || "";
  const token = localStorage.getItem("token");
  client
    .put(
      `/users/${user._id}`,
      { account: state2 },
      { headers: { Authorization: `${token}` } }
    )
    .then((response) => {
      if (response.data.acknowledged) {
        toast.success("Account details updated");
        setTimeout(() => {
          navigate("/overview");
        }, 3000);
      }
    })
    .catch((err) => {
      toast.error(err.message);
    });
};

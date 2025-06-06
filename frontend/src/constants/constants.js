import { MdOutlineEdit } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi2";
import { IoMdHelpCircleOutline } from "react-icons/io";

export const NavItems = [
  {
    name: "Home",
    slug: "/",
    active: true,
  },
  {
    name: "TV Shows",
    slug: "/tvshows",
    active: false,
  },
  {
    name: "Movies",
    slug: "/movies",
    active: false,
  },
  {
    name: "New & Popular",
    slug: "/newandpopular",
    active: false,
  },
  {
    name: "My List",
    slug: "/mylist",
    active: false,
  },
];

export const UserProfile = [
  {
    id: 1,
    slug: "manageprofiles",
    label: "Manage Profiles",
    icon: MdOutlineEdit,
  },
  {
    id: 2,
    slug: "account",
    label: "Account",
    icon: HiOutlineUser,
  },
  {
    id: 3,
    slug: "helpcenter",
    label: "Help Center",
    icon: IoMdHelpCircleOutline,
  },
];

export const FooterItems = [
  { id: 1, label: "FAQ" },
  { id: 2, label: "Help Centre" },
  { id: 3, label: "Account" },
  { id: 4, label: "Media Centre" },
  { id: 5, label: "Investor Relations" },
  { id: 6, label: "Jobs" },
  { id: 7, label: "Ways to Watch" },
  { id: 8, label: "Terms of Use" },
  { id: 9, label: "Privacy" },
  { id: 10, label: "Cookie Preferences" },
  { id: 11, label: "Corporate Information" },
  { id: 12, label: "Contact Us" },
  { id: 13, label: "Speed Test" },
  { id: 14, label: "Legal Notices" },
  { id: 15, label: "Only on Netflix" },
];

export const Languages = [
  { code: "en", label: "English" },
  { code: "hi", label: "Hindi" },
];

export const FAQs = [
  {
    id: 1,
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
  },
  {
    id: 2,
    question: "How much does Netflix cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
  },
  {
    id: 3,
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
  },
  {
    id: 4,
    question: "How do I cancel?",
    answer:
      "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    id: 5,
    question: "What can I watch on Netflix?",
    answer:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    id: 6,
    question: "Is Netflix good for kids",
    answer:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
  },
];

export const TmdbGenre = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
  10759: "Action & Adventure",
  10765: "Sci-Fi & Fantasy",
};

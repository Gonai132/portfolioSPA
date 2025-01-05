#  Unniversity project of SPA website: Portfolio SPA - Gosia

This project is an university project of SPA website called "Portfolio SPA - Gosia" build with the use of React and Bootstrap. For documentation in English please scroll down.

## Polish documentation:

Projekt hostowany jest na domenie: https://portfolio-spa.pl/ a także na Github Pages: https://gonai132.github.io/portfolioSPA/

Jest to mój indywidualny projekt aplikacji typu SPA napisanej w frameworku React i Bootstrap. Jest on wariacją na temat innego projektu studenckiego z tego samego semestru na przedmiot Narzędzia pracy Front-End Developera. Projekt dotyczył witryny typu portfolio napisanej w czystym HTML, CSS i JavaScript i jest on również dostępny na moim Githubie w repozytorium: https://github.com/Gonai132/Portfolio-Gosia oraz na witrynie: https://portfolio-gosia.pl/ 

W tym projekcie postanowiłam stworzyć podobną stronę typu portfolio z trochę innym projektem graficznym, ale tym razem korzystając z frameworka React oraz frameworka CSS Bootstrap. Jest to strona typu Single Page Application. Reacta zaczełam uczyć się dopiero w tym semestrze, jestem w trakcie uzyskania certyfikatu "Meta Front-End Developer Professional Certificate" poprzez platformę Coursera i aktualnie jestem w trakcie kursu React, gdyż został on stworzony właśnie przez Meta. Wybór frameworka, w którym chciałam wykonać ten projekt był więc dla mnie oczywisty. Skończyłam również kurs na platformie Udemy: "React JS Responsive Single Page Company Portfolio Website- Build a Responsive Single Page React JS App", który bardzo pomógł mi w napisaniu mojej aplikacji. Z Bootstrapem miałam styczność już wcześniej więc wybrałam go do stworzenia responsywnego designu. Bootstrap znacznie przyspieszył proces tworzenia aplikacji, dzięki niemu projekt jest zaprojektowany z myślą o urządzeniach mobilnych o różnych rozdzielczościach ekranu.

Nad tym projektem SPA pracowałam bardzo długo, poświecając na niego wiele dni wolnych, ale sprawiało mi to dużo przyjemności i bardzo wiele nauczyłam się o React w trakcie jego tworzenia. Bardzo spodobał mi się ten framework, a także możliwości jakie oferuje i postaram się wykorzystać go w późniejszej pracy nad moim projektem inżynierskim.

### Architektura frameworka React w mojej aplikacji SPA
Moja aplikacja jest zbudowana na bazie komponentów. Każda sekcja strony (np. Home, Gallery, Projects) jest oddzielnym komponentem React, a te komponenty później są iportowane do App.js.

useState i useEffect umożliwiają zarządzanie danymi i interakcjami użytkownika. Na przykład, komponent Packages przechowuje dane o dostępnych pakietach, które są dynamicznie wyświetlane na stronie i użytkownik może ich wczytać więcej lub mniej.

React Create Context - pozwolił mi stworzyć drugi ciemny motyw graficzny strony błyskawicznie przełączany jednym kliknięciem w ikonkę księzyca w prawym dolnym rogu aplikacji.

W komponencie Questions zaimportowałam dane do FAQ z zewnętrznego API z https://jsonplaceholder.typicode.com/posts a także skorzystałam z React Paginate do podzielenia tych danych na strony.

Skorzystałam również z wielu innych komponentów React takich jak:
- React Scroll To Top oraz React Scroll - do przechodzenia między sekcjami bez przeładowywania strony
- React Slick Slider (w komponencie MySlider umieszczonym w Gallery)
- React Reveal - do wprowadzenia animacji na stronie
- React Icons - do umieszczania ikon w wielu miejscach w projekcie
- React Typewriter - do animacji tekstu w komponencie Home
- React Toastify - do wyświetlania popupów po wprowadzenia danych w formularzu kontaktowym, jednak ze względu na brak możliwości zainstalowania Node.js na moim serwerze z home.pl nie jestem w stanie zaimplementować tego backendu do wysyłania maili z formularza.

## English documentation:

The project is hosted on the domain: https://portfolio-spa.pl/ and also on Github Pages: https://gonai132.github.io/portfolioSPA/

This is my individual project of a SPA application written in the React and Bootstrap framework. It is a variation on another student project from the same semester for the subject Front-End Developer's Tools. The project was a portfolio website written in pure HTML, CSS and JavaScript and is also available on my Github repository: https://github.com/Gonai132/Portfolio-Gosia and on the website: https://portfolio-gosia.pl/

In this project, I decided to create a similar portfolio-type website with a slightly different graphic design, but this time using the React framework and the Bootstrap CSS framework. It is a Single Page Application type website. I started learning React only this semester, I am in the process of obtaining the "Meta Front-End Developer Professional Certificate" certificate through the Coursera platform and I am currently in the middle of the React course, because it was created by Meta. The choice of the framework in which I wanted to perform this project was obvious to me. I also completed a course on the Udemy platform: "React JS Responsive Single Page Company Portfolio Website - Build a Responsive Single Page React JS App", which helped me a lot in writing my application. I had experience with Bootstrap before, so I chose it to create a responsive design. Bootstrap has significantly accelerated the application development process, thanks to which the project is designed for mobile devices with different screen resolutions.

I worked on this SPA project for a very long time, taking many days off, but I had a lot of fun doing it and I learned a lot about React while creating it. I really liked this framework and the possibilities it offers and I will try to use it in my later work on my engineering project.

### Architecture of React framework w in my SPA

My application is built on a component basis. Each section of the page (e.g. Home, Gallery, Projects) is a separate React component, and these components are later imported into App.js.

useState and useEffect allow you to manage user data and interactions. For example, the Packages component stores data about available packages, which are dynamically displayed on the page and the user can load more or less of them.

React Create Context - allowed me to create a second dark graphic theme for the website, quickly switchable with one click on the moon icon in the lower right corner of the application.

In the Questions component, I imported data to the FAQ from an external API from https://jsonplaceholder.typicode.com/posts and also used React Paginate to divide the data into pages.

I also used many other React components such as:
- React Scroll To Top and React Scroll - for moving between sections without reloading the page
- React Slick Slider (in the MySlider component located in the Gallery)
- React Reveal - for introducing animations on the website
- React Icons - for placing icons in multiple places in the project
- React Typewriter - for animating text in the Home component
- React Toastify - for displaying popups after entering data in the contact form, however, due to the inability to install Node.js on my home.pl server, I am not able to implement this backend for sending emails from the form.
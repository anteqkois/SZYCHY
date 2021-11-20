import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DiscussionModel from './DiscussionModel';


const StyledContent = styled.div`
  margin-left: 300px;
  color: white;
  margin-top: 60px;
`;

function ContentDiscussion() {
  return(
    <StyledContent>
        <DiscussionModel title="Globalne ocieplenie" contentPost="Z długoletnich analiz wynika, iż globalne ocieplenie oddziałuje na systemy biologiczne i fizyczne, co jest najbardziej widoczne przez podwyższanie się temperatury oraz poziomu mórz. Zaobserwowano także zmiany pokrywy śnieżnej oraz cofanie się lodowców. Naukowcy twierdzą, iż doprowadzi to do pogłębienia się niżówek, czyli okresów niskich stanów wody w rzece oraz trudności z dostępem do wody w krajach rozwijających się. Co więcej, można dostrzec także przemiany związane z fenologią, takie jak: wcześniejsze przyjście wiosny czy przybycie ptaków. Następną konsekwencją globalnego ocieplenia jest przemieszczanie się określonych gatunków roślin i zwierząt w celu znalezienia odpowiedniej temperatury. Poza tym, zmiana klimatu jest odczuwalna także w rolnictwie i leśnictwie, np. na południu Europy ograniczona ilość wody może mieć negatywne działanie na produkcję roślinną. Oprócz tego, fale upałów będą mieć niekorzystny wpływ na życie oraz zdrowie ludzi. " ></DiscussionModel>
        <DiscussionModel title="Kryzys migracyjny na granicy z Białorusią" contentPost="Eksperci twierdzą, że producenci samochodów mają problemy z uzyskaniem różnego rodzaju części i surowców z wielu powodów – pandemia zmusiła do zamknięcia zakładów, problemy logistyczne obejmują braki statków, kontenerów i kierowców ciężarówek, pojawiły się też obawy, że zabraknie pracowników. To sprawia, że koszty obecnego kryzysu w łańcuchu dostaw są znacznie większe niż wcześniejsze szacunki, co prowadzi do znacznie wyższych kosztów dla producentów – a także nabywców samochodów." ></DiscussionModel>
        <DiscussionModel title="Opóźnienia w łańcuchu dostaw " contentPost="Litwa, Łotwa i Polska w ciągu ostatnich miesięcy zmagają się ze wzrostem liczby nielegalnych migrantów na granicy z Białorusią, oskarżając Mińsk o wywołanie kryzysu migracyjnego w odpowiedzi na unijne sankcje. Mińsk odrzuca wszystkie zarzuty. W związku z zaistniałą sytuacją prezydent Andrzej Duda wprowadził stan wyjątkowy na terenach graniczących z Białorusią. Do ochrony granicy skierowano wojsko i policję." ></DiscussionModel>
    </StyledContent>
  );
}

export default ContentDiscussion;

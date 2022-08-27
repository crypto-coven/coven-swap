import styled from "styled-components";
import Image from "next/image";
import { Archetype, Zodiac } from "../types";
import { Address } from "@wagmi/core/dist/declarations/src/types";

type SwapDetails = {
  swapImageUrl: string;
  swapTimeRemaining: number;
  swapTxLink: string;
  swapWitchName: string;
  swapAccountAddress: Address;
};

type CardProps = {
  imageUrl: string;
  witchName: string;
  archetype: Archetype;
  sun: Zodiac;
  rising: Zodiac;
  moon: Zodiac;
  swapDetails?: SwapDetails;
};

export const NewCard = ({
  imageUrl,
  witchName,
  archetype,
  sun,
  rising,
  moon,
  swapDetails,
}: CardProps) => {
  return (
    <CardContainer>
      {swapDetails ? (
        <DualImageContainer>
          <Image src={swapDetails.swapImageUrl} width={260} height={255} />
          <Image src={imageUrl} width={260} height={255} />
        </DualImageContainer>
      ) : (
        <ImageContainer>
          <StyledImage src={imageUrl} width={260} height={255} layout="fixed" />
        </ImageContainer>
      )}
      <Footer>
        <NameContainer>
          {swapDetails ? (
            <>
              <Text>{swapDetails.swapWitchName}</Text>
              <Text>{witchName}</Text>
            </>
          ) : (
            <Text>{witchName}</Text>
          )}
        </NameContainer>
        <DetailContainer>
          {swapDetails ? (
            <>
              <FlexColumn>
                <Text color="orange">{swapDetails.swapAccountAddress}</Text>
                <Text color="gray">
                  {swapDetails.swapTimeRemaining} time left -{" "}
                  <a href={swapDetails.swapTxLink}>etherscan</a>
                </Text>
              </FlexColumn>
            </>
          ) : (
            <>
              <Text color="#CBAE99">{archetype}</Text>
              <ZodiacContainer>
                <ZodiacImage zodiac={sun} />
                <ZodiacImage zodiac={moon} />
                <ZodiacImage zodiac={rising} />
              </ZodiacContainer>
            </>
          )}
        </DetailContainer>
      </Footer>
    </CardContainer>
  );
};

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const FlexBetween = styled(FlexRow)`
  justify-content: space-between;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardContainer = styled.div`
  border-radius: 12px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #393f51;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 16px;
`;

const ImageContainer = styled.div`
  border-radius: 12px;
`;

const StyledImage = styled(Image)`
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;
const DualImageContainer = styled.div``;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  
`; 

const ZodiacContainer = styled(FlexRow)`
  background-color: rgba(0, 0, 0, 0.09);
  padding: 6px 8px;
  border-radius: 12px;
  gap: 6px;
`;

const Text = styled.p<{ color?: string }>`
  font-size: 16px;
  color: ${(props) => (props.color ? props.color : "white")};
  font-family: "Inconsolata";
  margin: 0;
`;

const ZodiacImage = ({ zodiac }: { zodiac: Zodiac }) => (
  <Image src={`/signs/${zodiac}.png`} width={16} height={16} layout="fixed" />
);

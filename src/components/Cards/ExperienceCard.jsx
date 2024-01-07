import React from "react";
import styled from "styled-components";
import { Render, isUndefinedOrNull } from "../../packages";

const Document = styled.img`
  display: none;
  height: 70px;
  width: fit-content;
  background-color: #000;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Card = styled.div`
  width: 650px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
  @media only screen and (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 300px;
  }

  &:hover ${Document} {
    display: flex;
  }

  &:hover ${Span} {
    overflow: visible;
    -webkit-line-clamp: unset;
  }

  border: 0.1px solid #306ee8;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

const Image = styled.img`
  height: 50px;
  background-color: #000;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Role = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: -10px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Skill = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ExperienceCard = (props) => {
  const { experience } = props;
  return (
    <Render if={experience}>
      <Card>
        <Top>
          <Image src={isUndefinedOrNull(experience.img)} />
          <Body>
            <Role>{isUndefinedOrNull(experience.role)}</Role>
            <Company>{isUndefinedOrNull(experience.company)}</Company>
            <Date>{isUndefinedOrNull(experience.date)}</Date>
          </Body>
        </Top>
        <Description>
          {isUndefinedOrNull(experience?.desc) && (
            <Span>{isUndefinedOrNull(experience?.desc)}</Span>
          )}
          {isUndefinedOrNull(experience?.skills) && (
            <>
              <br />
              <Skills>
                <b>Skills:</b>
                <ItemWrapper>
                  {experience?.skills?.map((skill, index) => (
                    <Skill>• {skill}</Skill>
                  ))}
                </ItemWrapper>
              </Skills>
            </>
          )}
        </Description>
        {experience.doc ? (
          <a href={experience.doc} target="_blank" rel="noopener noreferrer">
            <Document src={experience.doc} />
          </a>
        ) : (
          <img
            src="data:image/png;base64,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"
            alt="Dummy Document"
          />
        )}
      </Card>
    </Render>
  );
};

export default ExperienceCard;

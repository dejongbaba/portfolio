import React from 'react';
import Text from "../Text/Text";
import Section from "../Section/Section";

const PortfolioSection = ({title, subHeading, portfolioItems}) => {
    return (
        <Section>
            <Text type={'subHeading'}>{subHeading}</Text>
            <Text>{title}</Text>
            {/*<PortfolioGallery items={portfolioItems}/>*/}
        </Section>
    );
};

PortfolioSection.propTypes = {};

export default PortfolioSection;
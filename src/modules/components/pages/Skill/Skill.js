import { useEffect, useState } from 'react';
import { useParams } from "react-router";
import PageHeader from "../../atoms/PageHeader/PageHeader";
import SkillsApi from "../../../api/SkillsApi";
import OneBigOneSmallCol from "../../layouts/OneBigOneSmallCol/OneBigOneSmallCol";
import SkillData from "../../organisms/SkillData/SkillData";
import RelatedItemsAside from "../../organisms/RelatedItems/RelatedItemsAside/RelatedItemsAside";

const Skill = () => {
    const params = useParams();
    const [skill, setSkill] = useState();
    const [relatedSkills, setRelatedSkills] = useState();
    useEffect(() => {
        SkillsApi.getSkillInfo(params.skillId).then(({data}) => {
            setSkill(data)
        }).catch(() => {
            alert('Error happened please refresh...')
        })

        SkillsApi.getRelatedSkills(params.skillId).then(({data}) => {
            setRelatedSkills(data.skills.splice(0,12).map(skill => ({
                uuid: skill.uuid,
                name: skill.skill_name
            })))
        }).catch(() => {
            alert('Error happened please refresh...')
        })

    }, [params]);

    return (
        <div>
            <PageHeader>{skill?.skill_name}</PageHeader>
            <OneBigOneSmallCol>
                <SkillData
                    skill={skill}
                />
                <RelatedItemsAside
                    items={relatedSkills}
                    itemRoute={'/skill'}
                    title={'Related Skills'}
                />
            </OneBigOneSmallCol>
        </div>
    )
};

export default Skill;
import * as React from 'react'

import {
    wrapper,
    title,
    socials,
    facebook,
    linkedin
} from "./footer.module.css"

const Footer = ({ siteTitle, companyInfo }) => {
    return (
        <div className={wrapper}>
            <div>
                <p className={title}>{siteTitle}</p>
                <p>Alle rechten voorbehouden.</p>
                <p>Guning Deng 2021.</p>
            </div>
            <div>
                <p>{`${companyInfo.address}, ${companyInfo.postcode} ${companyInfo.city}`}</p>
                <div className={socials}>
                    Volg ons:
                    <a
                        className={facebook} 
                        target="_blank"
                        rel="noreferrer"
                        href={companyInfo.socials.facebook}
                    >{" "}</a>
                    <a 
                        className={linkedin}
                        target="_blank"
                        rel="noreferrer"
                        href={companyInfo.socials.linkedin}
                    >{" "}</a>

                </div>
            </div>
        </div>
    )
}

export default Footer
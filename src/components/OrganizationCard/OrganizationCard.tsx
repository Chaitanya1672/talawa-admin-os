import React from 'react';
import styles from './OrganizationCard.module.css';

interface InterfaceOrganizationCardProps {
  image: string;
  id: string;
  name: string;
  lastName: string;
  firstName: string;
}

/**
 * Component to display an organization's card with its image and owner details.
 *
 * @param image - URL of the organization's image.
 * @param id - Unique identifier for the organization.
 * @param name - Name of the organization.
 * @param lastName - Last name of the owner's name.
 * @param firstName - First name of the owner's name.
 * @returns JSX element representing the organization card.
 */
function organizationCard(props: InterfaceOrganizationCardProps): JSX.Element {
  const uri = '/superorghome/i=' + props.id;

  return (
    <>
      <a href={uri}>
        <div className={styles.box}>
          <div className={styles.first_box}>
            {props.image ? (
              <img src={props.image} className={styles.alignimg} />
            ) : (
              <img
                src="https://via.placeholder.com/80"
                className={styles.alignimg}
              />
            )}
            <div className={styles.second_box}>
              <h4>{props.name}</h4>
              <h5>
                Owner:
                <span>{props.firstName}</span>
                <span>
                  &nbsp;
                  {props.lastName}
                </span>
              </h5>
            </div>
          </div>
          <div className={styles.deco}></div>
        </div>
      </a>
    </>
  );
}

export {};
export default organizationCard;

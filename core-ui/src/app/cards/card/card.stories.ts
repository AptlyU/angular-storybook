import {storiesOf, moduleMetadata} from '@storybook/angular';

import {CardComponent} from './card.component';

storiesOf('Card', module).add(
    'default', () => ({
        component: CardComponent,
        props: {
            bodyText: 'Brownie gummies donut bear claw bear claw soufflé bear claw jelly beans. Apple pie icing sesame snaps cookie cookie. Caramels cheesecake fruitcake chupa chups halvah dessert. Tiramisu gummies sweet roll jelly beans. '
        }
    })
);

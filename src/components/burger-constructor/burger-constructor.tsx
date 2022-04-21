import React from 'react';
import Typography from '@ya.praktikum/react-developer-burger-ui-components';
import { ConstructorElement, Button }  from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-constructor.module.css';

function BurgerConstructor () {
    return (
        <section className={styles.wrap}>
            <ConstructorElement 
                type="top"
                isLocked={true}
                text="Краторная булка N-200i (верх)"
                price={200}
                thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
            />
            <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
            />
            <ConstructorElement
                type="bottom"
                isLocked={true}
                text="Краторная булка N-200i (низ)"
                price={200}
                thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
            />
            <div className={styles.order_button_wrap}>
                <Button type="primary" size="small">
                    Оформить заказ
                </Button>
            </div>
            
        </section>
    );
}

export default BurgerConstructor;
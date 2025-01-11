import classNames from "classnames/bind";

import styles from "./loader.module.scss";

const cn = classNames.bind(styles);

export const Loader = () => {
    return (
            <div className={cn("loader-container")}>
                <div className={cn("loader-circle")}>
                </div>
            </div>
    );
};

Loader.displayName = 'Loader';

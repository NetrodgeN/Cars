import { useSelector } from "react-redux";
import { getActualSpecification } from "../../store/automakers/automakers-selectors.ts";

import styles from "./specification-page.module.scss";
import classNames from "classnames/bind";
import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import { DetailsImgBlock, DetailsListRow } from "./components";
import { useForm } from "@tanstack/react-form";
import { Specification } from "../types.ts";
import { Button } from "../../components/buttons";

const cn = classNames.bind(styles);

enum SpecificationFields {
  PRICE = "price",
  VIN = "VIN",
  ENGINE = "engine",
  DRIVE = "drive",
  COLOR = "color",
  EQUIPMENT = "equipment",
  TRANSMISSION = "transmission",
}

export const EditableSpecificationPage = () => {
  const actualSpecification = useSelector(getActualSpecification);
  const {
    price,
    description,
    imgUrl,
    VIN,
    engine,
    drive,
    color,
    equipment,
    transmission,
  } = actualSpecification;

  const navigate = useNavigate();

  useEffect(() => {
    if (!actualSpecification.id) {
      navigate({
        to: "/automakers",
      });
    }
  }, []);

  const form = useForm<Specification>({
    onSubmit: async ({ value }) => {
      console.log("value", value);
      // onSubmit(value);
    },
    defaultValues: {
      description: description || "",
      color: color || "",
      equipment: equipment || "",
      transmission: transmission || "",
      drive: drive || "",
      engine: engine || "",
      VIN: VIN || "",
      price: price || "",
    },
  });

  return (
    <div className={cn("specification-page")}>
      <div className={cn("specification-page__auto-name-wrapper")}>
        EDITABLE PAGE
        <h1 className={cn("auto-name-wrapper__title")}> {description} </h1>
        <span className={cn("auto-name-wrapper__description")}>{color}</span>
      </div>
      <div className={cn("specification-page__details")}>
        <DetailsImgBlock alt={description} url={imgUrl} />
        <div className={cn("specification-page__details-list")}>
          <div className={cn("details-list")}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit();
              }}
            >
              <form.Subscribe>
                <form.Field
                  name={SpecificationFields.TRANSMISSION}
                  validators={{
                    onChange: ({ value }) =>
                      !value ? "Поле обязательно для заполнения" : undefined,
                  }}
                  children={(field) => (
                    <DetailsListRow
                      isEdit
                      name={field.name}
                      onChange={(e) => field.handleChange(e.target.value)}
                      title={"Коробка"}
                      description={field.state.value}
                    />
                  )}
                />
                <form.Field
                  name={SpecificationFields.VIN}
                  validators={{
                    onChange: ({ value }) =>
                      !value ? "Поле обязательно для заполнения" : undefined,
                  }}
                  children={(field) => (
                    <DetailsListRow
                      name={field.name}
                      isEdit
                      onChange={(e) => field.handleChange(e.target.value)}
                      title={"VIN"}
                      description={field.state.value}
                    />
                  )}
                />
                <form.Field
                  name={SpecificationFields.EQUIPMENT}
                  validators={{
                    onChange: ({ value }) =>
                      !value ? "Поле обязательно для заполнения" : undefined,
                  }}
                  children={(field) => (
                    <DetailsListRow
                      name={field.name}
                      isEdit
                      onChange={(e) => field.handleChange(e.target.value)}
                      title={"Комплектация"}
                      description={field.state.value}
                    />
                  )}
                />
                <form.Field
                  name={SpecificationFields.ENGINE}
                  validators={{
                    onChange: ({ value }) =>
                      !value ? "Поле обязательно для заполнения" : undefined,
                  }}
                  children={(field) => (
                    <DetailsListRow
                      name={field.name}
                      isEdit
                      onChange={(e) => field.handleChange(e.target.value)}
                      title={"Двигатель"}
                      description={field.state.value}
                    />
                  )}
                />
                <form.Field
                  name={SpecificationFields.DRIVE}
                  validators={{
                    onChange: ({ value }) =>
                      !value ? "Поле обязательно для заполнения" : undefined,
                  }}
                  children={(field) => (
                    <DetailsListRow
                      name={field.name}
                      isEdit
                      onChange={(e) => field.handleChange(e.target.value)}
                      title={"Топливо"}
                      description={field.state.value}
                    />
                  )}
                />
                <form.Field
                  name={SpecificationFields.COLOR}
                  validators={{
                    onChange: ({ value }) =>
                      !value ? "Поле обязательно для заполнения" : undefined,
                  }}
                  children={(field) => (
                    <DetailsListRow
                      name={field.name}
                      description={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      title="Цвет"
                      isEdit
                    />
                  )}
                />
                <form.Field
                  name={SpecificationFields.PRICE}
                  validators={{
                    onChange: ({ value }) =>
                      !value ? "Поле обязательно для заполнения" : undefined,
                  }}
                  children={(field) => (
                    <DetailsListRow
                      name={field.name}
                      description={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      title="Стоимость"
                      isEdit
                    />
                  )}
                />
              </form.Subscribe>
              <Button label={"Сохранить"} primary />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

EditableSpecificationPage.displayName = "EditableSpecificationPage";

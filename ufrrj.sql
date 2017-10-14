-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`disciplina`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`disciplina` (
  `id` INT NOT NULL,
  `nome` VARCHAR(45) NULL,
  `codigo` VARCHAR(45) NULL,
  `deleted` TINYINT(1) NULL,
  `qtd_credito` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`curso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`curso` (
  `id` INT NOT NULL,
  `nome` VARCHAR(45) NULL,
  `codigo` VARCHAR(45) NULL,
  `deleted` TINYINT(1) NULL,
  `limite_periodos` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`grade`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`grade` (
  `id` INT NOT NULL,
  `inicio_vigencia` DATE NULL,
  `disponivel` TINYINT(1) NULL,
  `deleted` TINYINT(1) NULL,
  `curso_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_grade_UNIQUE` (`id` ASC),
  INDEX `fk_grade_curso1_idx` (`curso_id` ASC),
  CONSTRAINT `fk_grade_curso1`
    FOREIGN KEY (`curso_id`)
    REFERENCES `mydb`.`curso` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`disciplina_grade`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`disciplina_grade` (
  `id_disciplina` INT NOT NULL,
  `id_grade` INT NOT NULL,
  `periodo` INT NULL,
  PRIMARY KEY (`id_disciplina`, `id_grade`),
  INDEX `fk_disciplina_has_grade_grade1_idx` (`id_grade` ASC),
  INDEX `fk_disciplina_has_grade_disciplina_idx` (`id_disciplina` ASC),
  CONSTRAINT `fk_disciplina_has_grade_disciplina`
    FOREIGN KEY (`id_disciplina`)
    REFERENCES `mydb`.`disciplina` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_disciplina_has_grade_grade1`
    FOREIGN KEY (`id_grade`)
    REFERENCES `mydb`.`grade` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`prerequisito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`prerequisito` (
  `id_disciplina` INT NOT NULL,
  `id_requisito` INT NOT NULL,
  `grade_id` INT NOT NULL,
  PRIMARY KEY (`id_disciplina`, `id_requisito`),
  INDEX `fk_disciplina_has_disciplina_disciplina2_idx` (`id_requisito` ASC),
  INDEX `fk_disciplina_has_disciplina_disciplina1_idx` (`id_disciplina` ASC),
  INDEX `fk_prerequisito_grade1_idx` (`grade_id` ASC),
  CONSTRAINT `fk_disciplina_has_disciplina_disciplina1`
    FOREIGN KEY (`id_disciplina`)
    REFERENCES `mydb`.`disciplina` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_disciplina_has_disciplina_disciplina2`
    FOREIGN KEY (`id_requisito`)
    REFERENCES `mydb`.`disciplina` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_prerequisito_grade1`
    FOREIGN KEY (`grade_id`)
    REFERENCES `mydb`.`grade` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`periodo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`periodo` (
  `id` INT NOT NULL,
  `data_inicio` DATE NULL,
  `data_fim` DATE NULL,
  `nome` VARCHAR(45) NULL,
  `deleted` TINYINT(1) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`professor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`professor` (
  `id` INT NOT NULL,
  `nome` VARCHAR(45) NULL,
  `matricula` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`turma`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`turma` (
  `id` INT NOT NULL,
  `codigo` VARCHAR(5) NULL,
  `deleted` VARCHAR(45) NULL,
  `vagas` INT NULL,
  `disciplina_id` INT NOT NULL,
  `periodo_id` INT NOT NULL,
  `professor_id` INT NOT NULL,
  `turno` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_turma_disciplina1_idx` (`disciplina_id` ASC),
  INDEX `fk_turma_periodo1_idx` (`periodo_id` ASC),
  INDEX `fk_turma_professor1_idx` (`professor_id` ASC),
  CONSTRAINT `fk_turma_disciplina1`
    FOREIGN KEY (`disciplina_id`)
    REFERENCES `mydb`.`disciplina` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_turma_periodo1`
    FOREIGN KEY (`periodo_id`)
    REFERENCES `mydb`.`periodo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_turma_professor1`
    FOREIGN KEY (`professor_id`)
    REFERENCES `mydb`.`professor` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`aluno`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`aluno` (
  `id` INT NOT NULL,
  `nome` VARCHAR(45) NULL,
  `matricula` VARCHAR(45) NULL,
  `ativo` TINYINT(1) NULL,
  `ingresso` VARCHAR(45) NULL,
  `deleted` TINYINT(1) NULL,
  `curso_id` INT NOT NULL,
  `grade_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_aluno_curso1_idx` (`curso_id` ASC),
  INDEX `fk_aluno_grade1_idx` (`grade_id` ASC),
  CONSTRAINT `fk_aluno_curso1`
    FOREIGN KEY (`curso_id`)
    REFERENCES `mydb`.`curso` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_aluno_grade1`
    FOREIGN KEY (`grade_id`)
    REFERENCES `mydb`.`grade` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`aluno_turma`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`aluno_turma` (
  `turma_id` INT NOT NULL,
  `aluno_id` INT NOT NULL,
  PRIMARY KEY (`turma_id`, `aluno_id`),
  INDEX `fk_turma_has_aluno_aluno1_idx` (`aluno_id` ASC),
  INDEX `fk_turma_has_aluno_turma1_idx` (`turma_id` ASC),
  CONSTRAINT `fk_turma_has_aluno_turma1`
    FOREIGN KEY (`turma_id`)
    REFERENCES `mydb`.`turma` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_turma_has_aluno_aluno1`
    FOREIGN KEY (`aluno_id`)
    REFERENCES `mydb`.`aluno` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`avaliacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`avaliacao` (
  `id` INT NOT NULL,
  `nome` VARCHAR(45) NULL,
  `data` VARCHAR(45) NULL,
  `descricao` VARCHAR(45) NULL,
  `turma_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_avaliacao_turma1_idx` (`turma_id` ASC),
  CONSTRAINT `fk_avaliacao_turma1`
    FOREIGN KEY (`turma_id`)
    REFERENCES `mydb`.`turma` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`avaliacao_aluno`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`avaliacao_aluno` (
  `avaliacao_id` INT NOT NULL,
  `aluno_id` INT NOT NULL,
  `nota` VARCHAR(45) NULL,
  PRIMARY KEY (`avaliacao_id`, `aluno_id`),
  INDEX `fk_avaliacao_has_aluno_aluno1_idx` (`aluno_id` ASC),
  INDEX `fk_avaliacao_has_aluno_avaliacao1_idx` (`avaliacao_id` ASC),
  CONSTRAINT `fk_avaliacao_has_aluno_avaliacao1`
    FOREIGN KEY (`avaliacao_id`)
    REFERENCES `mydb`.`avaliacao` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_avaliacao_has_aluno_aluno1`
    FOREIGN KEY (`aluno_id`)
    REFERENCES `mydb`.`aluno` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tipo_resultado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tipo_resultado` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`resultadofinal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`resultadofinal` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `resultado` VARCHAR(45) NULL,
  `notafinal` FLOAT NULL,
  `aluno_id` INT NOT NULL,
  `turma_id` INT NOT NULL,
  `tipos_resultado_id` INT NOT NULL,
  PRIMARY KEY (`id`, `aluno_id`, `turma_id`, `tipos_resultado_id`),
  INDEX `fk_resultadofinal_aluno1_idx` (`aluno_id` ASC),
  INDEX `fk_resultadofinal_turma1_idx` (`turma_id` ASC),
  INDEX `fk_resultadofinal_tipos_resultado1_idx` (`tipos_resultado_id` ASC),
  CONSTRAINT `fk_resultadofinal_aluno1`
    FOREIGN KEY (`aluno_id`)
    REFERENCES `mydb`.`aluno` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_resultadofinal_turma1`
    FOREIGN KEY (`turma_id`)
    REFERENCES `mydb`.`turma` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_resultadofinal_tipos_resultado1`
    FOREIGN KEY (`tipos_resultado_id`)
    REFERENCES `mydb`.`tipo_resultado` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`aula`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`aula` (
  `id` INT NOT NULL,
  `turma_id` INT NOT NULL,
  `data` DATE NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_aula_turma1_idx` (`turma_id` ASC),
  CONSTRAINT `fk_aula_turma1`
    FOREIGN KEY (`turma_id`)
    REFERENCES `mydb`.`turma` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`horario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`horario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `hora_inico` TIME(5) NULL,
  `hora_fim` TIME(5) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`predio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`predio` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(200) NULL,
  `sigla` VARCHAR(45) NULL,
  `lat` VARCHAR(45) NULL,
  `long` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`sala`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`sala` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `predio_id` INT NOT NULL,
  `nome` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_sala_predio1_idx` (`predio_id` ASC),
  CONSTRAINT `fk_sala_predio1`
    FOREIGN KEY (`predio_id`)
    REFERENCES `mydb`.`predio` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`horario_turma`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`horario_turma` (
  `horario_id` INT NOT NULL,
  `turma_id` INT NOT NULL,
  `dia_semana` VARCHAR(45) NULL,
  `sala_id` INT NOT NULL,
  PRIMARY KEY (`horario_id`, `turma_id`, `sala_id`),
  INDEX `fk_horario_has_turma_turma1_idx` (`turma_id` ASC),
  INDEX `fk_horario_has_turma_horario1_idx` (`horario_id` ASC),
  INDEX `fk_horario_turma_sala1_idx` (`sala_id` ASC),
  CONSTRAINT `fk_horario_has_turma_horario1`
    FOREIGN KEY (`horario_id`)
    REFERENCES `mydb`.`horario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_horario_has_turma_turma1`
    FOREIGN KEY (`turma_id`)
    REFERENCES `mydb`.`turma` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_horario_turma_sala1`
    FOREIGN KEY (`sala_id`)
    REFERENCES `mydb`.`sala` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`conteudo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`conteudo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `aula_id` INT NOT NULL,
  `nome` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_conteudo_aula1_idx` (`aula_id` ASC),
  CONSTRAINT `fk_conteudo_aula1`
    FOREIGN KEY (`aula_id`)
    REFERENCES `mydb`.`aula` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`material`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`material` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `conteudo_id` INT NOT NULL,
  `arquivo` VARCHAR(500) NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_material_conteudo1`
    FOREIGN KEY (`conteudo_id`)
    REFERENCES `mydb`.`conteudo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`material_avaliacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`material_avaliacao` (
  `material_id` INT NOT NULL,
  `avaliacao_id` INT NOT NULL,
  PRIMARY KEY (`material_id`, `avaliacao_id`),
  INDEX `fk_material_has_avaliacao_avaliacao1_idx` (`avaliacao_id` ASC),
  INDEX `fk_material_has_avaliacao_material1_idx` (`material_id` ASC),
  CONSTRAINT `fk_material_has_avaliacao_material1`
    FOREIGN KEY (`material_id`)
    REFERENCES `mydb`.`material` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_material_has_avaliacao_avaliacao1`
    FOREIGN KEY (`avaliacao_id`)
    REFERENCES `mydb`.`avaliacao` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tipo_presenca`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tipo_presenca` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`presenca`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`presenca` (
  `aula_id` INT NOT NULL,
  `aluno_id` INT NOT NULL,
  `tipo` VARCHAR(45) NULL,
  `descricao_justificativa` VARCHAR(45) NULL,
  `arquivo_justificativa` VARCHAR(45) NULL,
  `tipo_presenca_id` INT NOT NULL,
  PRIMARY KEY (`aula_id`, `aluno_id`, `tipo_presenca_id`),
  INDEX `fk_aula_has_aluno_aluno1_idx` (`aluno_id` ASC),
  INDEX `fk_aula_has_aluno_aula1_idx` (`aula_id` ASC),
  INDEX `fk_presenca_tipo_presenca1_idx` (`tipo_presenca_id` ASC),
  CONSTRAINT `fk_aula_has_aluno_aula1`
    FOREIGN KEY (`aula_id`)
    REFERENCES `mydb`.`aula` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_aula_has_aluno_aluno1`
    FOREIGN KEY (`aluno_id`)
    REFERENCES `mydb`.`aluno` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_presenca_tipo_presenca1`
    FOREIGN KEY (`tipo_presenca_id`)
    REFERENCES `mydb`.`tipo_presenca` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`instituto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`instituto` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `sigla` VARCHAR(45) NULL,
  `nome` VARCHAR(200) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`instituto_predio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`instituto_predio` (
  `instituto_id` INT NOT NULL,
  `predio_id` INT NOT NULL,
  PRIMARY KEY (`instituto_id`, `predio_id`),
  INDEX `fk_instituto_has_predio_predio1_idx` (`predio_id` ASC),
  INDEX `fk_instituto_has_predio_instituto1_idx` (`instituto_id` ASC),
  CONSTRAINT `fk_instituto_has_predio_instituto1`
    FOREIGN KEY (`instituto_id`)
    REFERENCES `mydb`.`instituto` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_instituto_has_predio_predio1`
    FOREIGN KEY (`predio_id`)
    REFERENCES `mydb`.`predio` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

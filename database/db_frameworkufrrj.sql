-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema db_frameworkufrrj
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `db_frameworkufrrj` ;

-- -----------------------------------------------------
-- Schema db_frameworkufrrj
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_frameworkufrrj` DEFAULT CHARACTER SET utf8 ;
USE `db_frameworkufrrj` ;

-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`disciplina`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`disciplina` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(200) NOT NULL,
  `codigo` VARCHAR(10) NOT NULL,
  `creditos` INT NOT NULL,
  `livre_escolha` TINYINT(1) NOT NULL DEFAULT 0,
  `deleted` TINYINT(1) NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nome_UNIQUE` (`nome` ASC),
  UNIQUE INDEX `codigo_UNIQUE` (`codigo` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`instituto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`instituto` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `sigla` VARCHAR(45) NOT NULL,
  `nome` VARCHAR(200) NOT NULL,
  `deleted` TINYINT(1) NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `sigla_UNIQUE` (`sigla` ASC),
  UNIQUE INDEX `nome_UNIQUE` (`nome` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`departamento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`departamento` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(200) NOT NULL,
  `sigla` VARCHAR(10) NOT NULL,
  `deleted` TINYINT(1) NULL DEFAULT 0,
  `instituto_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_departamento_instituto1_idx` (`instituto_id` ASC),
  UNIQUE INDEX `nome_UNIQUE` (`nome` ASC),
  UNIQUE INDEX `sigla_UNIQUE` (`sigla` ASC),
  CONSTRAINT `fk_departamento_instituto1`
    FOREIGN KEY (`instituto_id`)
    REFERENCES `db_frameworkufrrj`.`instituto` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`curso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`curso` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `codigo` VARCHAR(45) NOT NULL,
  `limite_periodos` INT NOT NULL,
  `turno` VARCHAR(10) NOT NULL,
  `deleted` TINYINT(1) NULL DEFAULT 0,
  `departamento_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_curso_departamento1_idx` (`departamento_id` ASC),
  UNIQUE INDEX `nome_UNIQUE` (`nome` ASC),
  UNIQUE INDEX `codigo_UNIQUE` (`codigo` ASC),
  CONSTRAINT `fk_curso_departamento1`
    FOREIGN KEY (`departamento_id`)
    REFERENCES `db_frameworkufrrj`.`departamento` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`grade`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`grade` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `inicio_vigencia` DATE NOT NULL,
  `disponivel` TINYINT(1) NOT NULL,
  `deleted` TINYINT(1) NULL DEFAULT 0,
  `curso_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_grade_UNIQUE` (`id` ASC),
  INDEX `fk_grade_curso1_idx` (`curso_id` ASC),
  CONSTRAINT `fk_grade_curso1`
    FOREIGN KEY (`curso_id`)
    REFERENCES `db_frameworkufrrj`.`curso` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`disciplina_grade`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`disciplina_grade` (
  `id_disciplina` INT NOT NULL,
  `id_grade` INT NOT NULL,
  `periodo` INT NOT NULL,
  PRIMARY KEY (`id_disciplina`, `id_grade`),
  INDEX `fk_disciplina_has_grade_grade1_idx` (`id_grade` ASC),
  INDEX `fk_disciplina_has_grade_disciplina_idx` (`id_disciplina` ASC),
  CONSTRAINT `fk_disciplina_has_grade_disciplina`
    FOREIGN KEY (`id_disciplina`)
    REFERENCES `db_frameworkufrrj`.`disciplina` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_disciplina_has_grade_grade1`
    FOREIGN KEY (`id_grade`)
    REFERENCES `db_frameworkufrrj`.`grade` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`prerequisito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`prerequisito` (
  `id_disciplina` INT NOT NULL,
  `id_requisito` INT NOT NULL,
  `grade_id` INT NOT NULL,
  PRIMARY KEY (`id_disciplina`, `id_requisito`),
  INDEX `fk_disciplina_has_disciplina_disciplina2_idx` (`id_requisito` ASC),
  INDEX `fk_disciplina_has_disciplina_disciplina1_idx` (`id_disciplina` ASC),
  INDEX `fk_prerequisito_grade1_idx` (`grade_id` ASC),
  CONSTRAINT `fk_disciplina_has_disciplina_disciplina1`
    FOREIGN KEY (`id_disciplina`)
    REFERENCES `db_frameworkufrrj`.`disciplina` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_disciplina_has_disciplina_disciplina2`
    FOREIGN KEY (`id_requisito`)
    REFERENCES `db_frameworkufrrj`.`disciplina` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_prerequisito_grade1`
    FOREIGN KEY (`grade_id`)
    REFERENCES `db_frameworkufrrj`.`grade` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`periodo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`periodo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `data_inicio` DATE NOT NULL,
  `data_fim` DATE NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `deleted` TINYINT(1) NULL DEFAULT 0,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`professor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`professor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `matricula` VARCHAR(45) NOT NULL,
  `deleted` TINYINT(1) NULL DEFAULT 0,
  `departamento_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_professor_departamento1_idx` (`departamento_id` ASC),
  UNIQUE INDEX `nome_UNIQUE` (`nome` ASC),
  UNIQUE INDEX `matricula_UNIQUE` (`matricula` ASC),
  CONSTRAINT `fk_professor_departamento1`
    FOREIGN KEY (`departamento_id`)
    REFERENCES `db_frameworkufrrj`.`departamento` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`turma`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`turma` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `turno` VARCHAR(45) NOT NULL,
  `codigo` VARCHAR(5) NOT NULL,
  `vagas` INT NOT NULL,
  `deleted` TINYINT(1) NULL DEFAULT 0,
  `disciplina_id` INT NOT NULL,
  `periodo_id` INT NOT NULL,
  `professor_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_turma_disciplina1_idx` (`disciplina_id` ASC),
  INDEX `fk_turma_periodo1_idx` (`periodo_id` ASC),
  INDEX `fk_turma_professor1_idx` (`professor_id` ASC),
  CONSTRAINT `fk_turma_disciplina1`
    FOREIGN KEY (`disciplina_id`)
    REFERENCES `db_frameworkufrrj`.`disciplina` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_turma_periodo1`
    FOREIGN KEY (`periodo_id`)
    REFERENCES `db_frameworkufrrj`.`periodo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_turma_professor1`
    FOREIGN KEY (`professor_id`)
    REFERENCES `db_frameworkufrrj`.`professor` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`aluno`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`aluno` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(200) NOT NULL,
  `matricula` VARCHAR(10) NOT NULL,
  `ativo` TINYINT(1) NOT NULL,
  `ingresso` DATE NOT NULL,
  `deleted` TINYINT(1) NULL DEFAULT 0,
  `curso_id` INT NOT NULL,
  `grade_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_aluno_curso1_idx` (`curso_id` ASC),
  INDEX `fk_aluno_grade1_idx` (`grade_id` ASC),
  UNIQUE INDEX `nome_UNIQUE` (`nome` ASC),
  UNIQUE INDEX `matricula_UNIQUE` (`matricula` ASC),
  CONSTRAINT `fk_aluno_curso1`
    FOREIGN KEY (`curso_id`)
    REFERENCES `db_frameworkufrrj`.`curso` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_aluno_grade1`
    FOREIGN KEY (`grade_id`)
    REFERENCES `db_frameworkufrrj`.`grade` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`aluno_turma`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`aluno_turma` (
  `turma_id` INT NOT NULL,
  `aluno_id` INT NOT NULL,
  PRIMARY KEY (`turma_id`, `aluno_id`),
  INDEX `fk_turma_has_aluno_aluno1_idx` (`aluno_id` ASC),
  INDEX `fk_turma_has_aluno_turma1_idx` (`turma_id` ASC),
  CONSTRAINT `fk_turma_has_aluno_turma1`
    FOREIGN KEY (`turma_id`)
    REFERENCES `db_frameworkufrrj`.`turma` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_turma_has_aluno_aluno1`
    FOREIGN KEY (`aluno_id`)
    REFERENCES `db_frameworkufrrj`.`aluno` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`avaliacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`avaliacao` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(200) NOT NULL,
  `data` DATE NOT NULL,
  `descricao` VARCHAR(400) NOT NULL,
  `deleted` TINYINT(1) NULL DEFAULT 0,
  `turma_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_avaliacao_turma1_idx` (`turma_id` ASC),
  CONSTRAINT `fk_avaliacao_turma1`
    FOREIGN KEY (`turma_id`)
    REFERENCES `db_frameworkufrrj`.`turma` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`avaliacao_aluno`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`avaliacao_aluno` (
  `avaliacao_id` INT NOT NULL,
  `aluno_id` INT NOT NULL,
  `nota` DOUBLE NOT NULL,
  PRIMARY KEY (`avaliacao_id`, `aluno_id`),
  INDEX `fk_avaliacao_has_aluno_aluno1_idx` (`aluno_id` ASC),
  INDEX `fk_avaliacao_has_aluno_avaliacao1_idx` (`avaliacao_id` ASC),
  CONSTRAINT `fk_avaliacao_has_aluno_avaliacao1`
    FOREIGN KEY (`avaliacao_id`)
    REFERENCES `db_frameworkufrrj`.`avaliacao` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_avaliacao_has_aluno_aluno1`
    FOREIGN KEY (`aluno_id`)
    REFERENCES `db_frameworkufrrj`.`aluno` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`tipo_resultado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`tipo_resultado` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `tipo_UNIQUE` (`tipo` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`resultadofinal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`resultadofinal` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nota_final` DOUBLE NOT NULL,
  `aluno_id` INT NOT NULL,
  `turma_id` INT NOT NULL,
  `tipos_resultado_id` INT NOT NULL,
  PRIMARY KEY (`id`, `aluno_id`, `turma_id`, `tipos_resultado_id`),
  INDEX `fk_resultadofinal_aluno1_idx` (`aluno_id` ASC),
  INDEX `fk_resultadofinal_turma1_idx` (`turma_id` ASC),
  INDEX `fk_resultadofinal_tipos_resultado1_idx` (`tipos_resultado_id` ASC),
  CONSTRAINT `fk_resultadofinal_aluno1`
    FOREIGN KEY (`aluno_id`)
    REFERENCES `db_frameworkufrrj`.`aluno` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_resultadofinal_turma1`
    FOREIGN KEY (`turma_id`)
    REFERENCES `db_frameworkufrrj`.`turma` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_resultadofinal_tipos_resultado1`
    FOREIGN KEY (`tipos_resultado_id`)
    REFERENCES `db_frameworkufrrj`.`tipo_resultado` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`aula`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`aula` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `turma_id` INT NOT NULL,
  `data` DATE NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_aula_turma1_idx` (`turma_id` ASC),
  CONSTRAINT `fk_aula_turma1`
    FOREIGN KEY (`turma_id`)
    REFERENCES `db_frameworkufrrj`.`turma` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`horario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`horario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `hora_inico` TIME(5) NOT NULL,
  `hora_fim` TIME(5) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`predio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`predio` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(200) NOT NULL,
  `sigla` VARCHAR(45) NOT NULL,
  `lat` VARCHAR(45) NOT NULL,
  `long` VARCHAR(45) NOT NULL,
  `deleted` TINYINT(1) NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nome_UNIQUE` (`nome` ASC),
  UNIQUE INDEX `sigla_UNIQUE` (`sigla` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`sala`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`sala` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `predio_id` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `deleted` TINYINT(1) NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  INDEX `fk_sala_predio1_idx` (`predio_id` ASC),
  CONSTRAINT `fk_sala_predio1`
    FOREIGN KEY (`predio_id`)
    REFERENCES `db_frameworkufrrj`.`predio` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`horario_turma`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`horario_turma` (
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
    REFERENCES `db_frameworkufrrj`.`horario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_horario_has_turma_turma1`
    FOREIGN KEY (`turma_id`)
    REFERENCES `db_frameworkufrrj`.`turma` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_horario_turma_sala1`
    FOREIGN KEY (`sala_id`)
    REFERENCES `db_frameworkufrrj`.`sala` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`conteudo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`conteudo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `aula_id` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_conteudo_aula1_idx` (`aula_id` ASC),
  CONSTRAINT `fk_conteudo_aula1`
    FOREIGN KEY (`aula_id`)
    REFERENCES `db_frameworkufrrj`.`aula` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`material`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`material` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `conteudo_id` INT NOT NULL,
  `arquivo` VARCHAR(500) NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_material_conteudo1`
    FOREIGN KEY (`conteudo_id`)
    REFERENCES `db_frameworkufrrj`.`conteudo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`tipo_presenca`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`tipo_presenca` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `descricao_UNIQUE` (`descricao` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`presenca`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`presenca` (
  `aula_id` INT NOT NULL,
  `aluno_id` INT NOT NULL,
  `descricao_justificativa` VARCHAR(45) NULL,
  `arquivo_justificativa` VARCHAR(45) NULL,
  `tipo_presenca_id` INT NOT NULL,
  PRIMARY KEY (`aula_id`, `aluno_id`, `tipo_presenca_id`),
  INDEX `fk_aula_has_aluno_aluno1_idx` (`aluno_id` ASC),
  INDEX `fk_aula_has_aluno_aula1_idx` (`aula_id` ASC),
  INDEX `fk_presenca_tipo_presenca1_idx` (`tipo_presenca_id` ASC),
  CONSTRAINT `fk_aula_has_aluno_aula1`
    FOREIGN KEY (`aula_id`)
    REFERENCES `db_frameworkufrrj`.`aula` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_aula_has_aluno_aluno1`
    FOREIGN KEY (`aluno_id`)
    REFERENCES `db_frameworkufrrj`.`aluno` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_presenca_tipo_presenca1`
    FOREIGN KEY (`tipo_presenca_id`)
    REFERENCES `db_frameworkufrrj`.`tipo_presenca` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`instituto_predio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`instituto_predio` (
  `instituto_id` INT NOT NULL,
  `predio_id` INT NOT NULL,
  PRIMARY KEY (`instituto_id`, `predio_id`),
  INDEX `fk_instituto_has_predio_predio1_idx` (`predio_id` ASC),
  INDEX `fk_instituto_has_predio_instituto1_idx` (`instituto_id` ASC),
  CONSTRAINT `fk_instituto_has_predio_instituto1`
    FOREIGN KEY (`instituto_id`)
    REFERENCES `db_frameworkufrrj`.`instituto` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_instituto_has_predio_predio1`
    FOREIGN KEY (`predio_id`)
    REFERENCES `db_frameworkufrrj`.`predio` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`conteudo_avaliacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`conteudo_avaliacao` (
  `conteudo_id` INT NOT NULL,
  `avaliacao_id` INT NOT NULL,
  PRIMARY KEY (`conteudo_id`, `avaliacao_id`),
  INDEX `fk_conteudo_has_avaliacao_avaliacao1_idx` (`avaliacao_id` ASC),
  INDEX `fk_conteudo_has_avaliacao_conteudo1_idx` (`conteudo_id` ASC),
  CONSTRAINT `fk_conteudo_has_avaliacao_conteudo1`
    FOREIGN KEY (`conteudo_id`)
    REFERENCES `db_frameworkufrrj`.`conteudo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_conteudo_has_avaliacao_avaliacao1`
    FOREIGN KEY (`avaliacao_id`)
    REFERENCES `db_frameworkufrrj`.`avaliacao` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`disciplina_curso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`disciplina_curso` (
  `curso_id` INT NOT NULL,
  `disciplina_id` INT NOT NULL,
  PRIMARY KEY (`curso_id`, `disciplina_id`),
  INDEX `fk_curso_has_disciplina_disciplina1_idx` (`disciplina_id` ASC),
  INDEX `fk_curso_has_disciplina_curso1_idx` (`curso_id` ASC),
  CONSTRAINT `fk_curso_has_disciplina_curso1`
    FOREIGN KEY (`curso_id`)
    REFERENCES `db_frameworkufrrj`.`curso` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_curso_has_disciplina_disciplina1`
    FOREIGN KEY (`disciplina_id`)
    REFERENCES `db_frameworkufrrj`.`disciplina` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

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
  `instituto` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_departamento_instituto1_idx` (`instituto` ASC),
  UNIQUE INDEX `nome_UNIQUE` (`nome` ASC),
  UNIQUE INDEX `sigla_UNIQUE` (`sigla` ASC),
  CONSTRAINT `fk_departamento_instituto1`
    FOREIGN KEY (`instituto`)
    REFERENCES `db_frameworkufrrj`.`instituto` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


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
  `departamento` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nome_UNIQUE` (`nome` ASC),
  UNIQUE INDEX `codigo_UNIQUE` (`codigo` ASC),
  INDEX `fk_disciplina_departamento1_idx` (`departamento` ASC),
  CONSTRAINT `fk_disciplina_departamento1`
    FOREIGN KEY (`departamento`)
    REFERENCES `db_frameworkufrrj`.`departamento` (`id`)
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
  `departamento` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_curso_departamento1_idx` (`departamento` ASC),
  UNIQUE INDEX `nome_UNIQUE` (`nome` ASC),
  UNIQUE INDEX `codigo_UNIQUE` (`codigo` ASC),
  CONSTRAINT `fk_curso_departamento1`
    FOREIGN KEY (`departamento`)
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
  `curso` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_grade_UNIQUE` (`id` ASC),
  INDEX `fk_grade_curso1_idx` (`curso` ASC),
  CONSTRAINT `fk_grade_curso1`
    FOREIGN KEY (`curso`)
    REFERENCES `db_frameworkufrrj`.`curso` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`disciplina_grade`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`disciplina_grade` (
  `disciplina` INT NOT NULL,
  `grade` INT NOT NULL,
  `periodo` INT NOT NULL,
  PRIMARY KEY (`disciplina`, `grade`),
  INDEX `fk_disciplina_has_grade_grade1_idx` (`grade` ASC),
  INDEX `fk_disciplina_has_grade_disciplina_idx` (`disciplina` ASC),
  CONSTRAINT `fk_disciplina_has_grade_disciplina`
    FOREIGN KEY (`disciplina`)
    REFERENCES `db_frameworkufrrj`.`disciplina` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_disciplina_has_grade_grade1`
    FOREIGN KEY (`grade`)
    REFERENCES `db_frameworkufrrj`.`grade` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`prerequisito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`prerequisito` (
  `disciplina` INT NOT NULL,
  `requisito` INT NOT NULL,
  `grade` INT NOT NULL,
  PRIMARY KEY (`disciplina`, `requisito`),
  INDEX `fk_disciplina_has_disciplina_disciplina2_idx` (`requisito` ASC),
  INDEX `fk_disciplina_has_disciplina_disciplina1_idx` (`disciplina` ASC),
  INDEX `fk_prerequisito_grade1_idx` (`grade` ASC),
  CONSTRAINT `fk_disciplina_has_disciplina_disciplina1`
    FOREIGN KEY (`disciplina`)
    REFERENCES `db_frameworkufrrj`.`disciplina` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_disciplina_has_disciplina_disciplina2`
    FOREIGN KEY (`requisito`)
    REFERENCES `db_frameworkufrrj`.`disciplina` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_prerequisito_grade1`
    FOREIGN KEY (`grade`)
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
-- Table `db_frameworkufrrj`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `login` VARCHAR(500) NOT NULL,
  `senha` VARCHAR(500) NOT NULL,
  `nivel` INT NOT NULL,
  `deleted` TINYINT(1) NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `login_UNIQUE` (`login` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`professor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`professor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `matricula` VARCHAR(45) NOT NULL,
  `deleted` TINYINT(1) NULL DEFAULT 0,
  `departamento` INT NOT NULL,
  `usuario` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_professor_departamento1_idx` (`departamento` ASC),
  UNIQUE INDEX `nome_UNIQUE` (`nome` ASC),
  UNIQUE INDEX `matricula_UNIQUE` (`matricula` ASC),
  INDEX `fk_professor_usuario1_idx` (`usuario` ASC),
  CONSTRAINT `fk_professor_departamento1`
    FOREIGN KEY (`departamento`)
    REFERENCES `db_frameworkufrrj`.`departamento` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_professor_usuario1`
    FOREIGN KEY (`usuario`)
    REFERENCES `db_frameworkufrrj`.`usuario` (`id`)
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
  `disciplina` INT NOT NULL,
  `periodo` INT NOT NULL,
  `professor` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_turma_disciplina1_idx` (`disciplina` ASC),
  INDEX `fk_turma_periodo1_idx` (`periodo` ASC),
  INDEX `fk_turma_professor1_idx` (`professor` ASC),
  CONSTRAINT `fk_turma_disciplina1`
    FOREIGN KEY (`disciplina`)
    REFERENCES `db_frameworkufrrj`.`disciplina` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_turma_periodo1`
    FOREIGN KEY (`periodo`)
    REFERENCES `db_frameworkufrrj`.`periodo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_turma_professor1`
    FOREIGN KEY (`professor`)
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
  `curso` INT NOT NULL,
  `grade` INT NOT NULL,
  `usuario` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_aluno_curso1_idx` (`curso` ASC),
  INDEX `fk_aluno_grade1_idx` (`grade` ASC),
  UNIQUE INDEX `nome_UNIQUE` (`nome` ASC),
  UNIQUE INDEX `matricula_UNIQUE` (`matricula` ASC),
  INDEX `fk_aluno_usuario1_idx` (`usuario` ASC),
  CONSTRAINT `fk_aluno_curso1`
    FOREIGN KEY (`curso`)
    REFERENCES `db_frameworkufrrj`.`curso` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_aluno_grade1`
    FOREIGN KEY (`grade`)
    REFERENCES `db_frameworkufrrj`.`grade` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_aluno_usuario1`
    FOREIGN KEY (`usuario`)
    REFERENCES `db_frameworkufrrj`.`usuario` (`id`)
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
  `turma` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_avaliacao_turma1_idx` (`turma` ASC),
  CONSTRAINT `fk_avaliacao_turma1`
    FOREIGN KEY (`turma`)
    REFERENCES `db_frameworkufrrj`.`turma` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`avaliacao_aluno`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`avaliacao_aluno` (
  `avaliacao` INT NOT NULL,
  `aluno` INT NOT NULL,
  `nota` DOUBLE NOT NULL,
  PRIMARY KEY (`avaliacao`, `aluno`),
  INDEX `fk_avaliacao_has_aluno_aluno1_idx` (`aluno` ASC),
  INDEX `fk_avaliacao_has_aluno_avaliacao1_idx` (`avaliacao` ASC),
  CONSTRAINT `fk_avaliacao_has_aluno_avaliacao1`
    FOREIGN KEY (`avaliacao`)
    REFERENCES `db_frameworkufrrj`.`avaliacao` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_avaliacao_has_aluno_aluno1`
    FOREIGN KEY (`aluno`)
    REFERENCES `db_frameworkufrrj`.`aluno` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`conceito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`conceito` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `tipo_UNIQUE` (`tipo` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`aluno_turma`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`aluno_turma` (
  `aluno` INT NOT NULL,
  `turma` INT NOT NULL,
  `nota_final` DOUBLE NOT NULL,
  `conceito` INT NOT NULL,
  PRIMARY KEY (`aluno`, `turma`),
  INDEX `fk_resultadofinal_aluno1_idx` (`aluno` ASC),
  INDEX `fk_resultadofinal_turma1_idx` (`turma` ASC),
  INDEX `fk_resultadofinal_conceito1_idx` (`conceito` ASC),
  CONSTRAINT `fk_resultadofinal_aluno1`
    FOREIGN KEY (`aluno`)
    REFERENCES `db_frameworkufrrj`.`aluno` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_resultadofinal_turma1`
    FOREIGN KEY (`turma`)
    REFERENCES `db_frameworkufrrj`.`turma` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_resultadofinal_conceito1`
    FOREIGN KEY (`conceito`)
    REFERENCES `db_frameworkufrrj`.`conceito` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`aula`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`aula` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `data` DATE NOT NULL,
  `turma` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_aula_turma1_idx` (`turma` ASC),
  CONSTRAINT `fk_aula_turma1`
    FOREIGN KEY (`turma`)
    REFERENCES `db_frameworkufrrj`.`turma` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
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
  `nome` VARCHAR(45) NOT NULL,
  `deleted` TINYINT(1) NULL DEFAULT 0,
  `predio` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_sala_predio1_idx` (`predio` ASC),
  CONSTRAINT `fk_sala_predio1`
    FOREIGN KEY (`predio`)
    REFERENCES `db_frameworkufrrj`.`predio` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`horario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`horario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `dia_semana` VARCHAR(45) NOT NULL,
  `hora_inicio` TIME NOT NULL,
  `hora_fim` TIME NOT NULL,
  `sala` INT NOT NULL,
  `turma` INT NOT NULL,
  INDEX `fk_horario_turma_sala1_idx` (`sala` ASC),
  INDEX `fk_horario_turma_turma1_idx` (`turma` ASC),
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_horario_turma_sala1`
    FOREIGN KEY (`sala`)
    REFERENCES `db_frameworkufrrj`.`sala` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_horario_turma_turma1`
    FOREIGN KEY (`turma`)
    REFERENCES `db_frameworkufrrj`.`turma` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`conteudo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`conteudo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `aula` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_conteudo_aula1_idx` (`aula` ASC),
  CONSTRAINT `fk_conteudo_aula1`
    FOREIGN KEY (`aula`)
    REFERENCES `db_frameworkufrrj`.`aula` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`material`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`material` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `arquivo` VARCHAR(500) NULL,
  `conteudo` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_material_conteudo1`
    FOREIGN KEY (`conteudo`)
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
  `aula` INT NOT NULL,
  `aluno` INT NOT NULL,
  `descricao_justificativa` VARCHAR(45) NULL,
  `arquivo_justificativa` VARCHAR(45) NULL,
  `tipo_presenca` INT NOT NULL,
  PRIMARY KEY (`aula`, `aluno`),
  INDEX `fk_aula_has_aluno_aluno1_idx` (`aluno` ASC),
  INDEX `fk_aula_has_aluno_aula1_idx` (`aula` ASC),
  INDEX `fk_presenca_tipo_presenca1_idx` (`tipo_presenca` ASC),
  CONSTRAINT `fk_aula_has_aluno_aula1`
    FOREIGN KEY (`aula`)
    REFERENCES `db_frameworkufrrj`.`aula` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_aula_has_aluno_aluno1`
    FOREIGN KEY (`aluno`)
    REFERENCES `db_frameworkufrrj`.`aluno` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_presenca_tipo_presenca1`
    FOREIGN KEY (`tipo_presenca`)
    REFERENCES `db_frameworkufrrj`.`tipo_presenca` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`instituto_predio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`instituto_predio` (
  `instituto` INT NOT NULL,
  `predio` INT NOT NULL,
  PRIMARY KEY (`instituto`, `predio`),
  INDEX `fk_instituto_has_predio_predio1_idx` (`predio` ASC),
  INDEX `fk_instituto_has_predio_instituto1_idx` (`instituto` ASC),
  CONSTRAINT `fk_instituto_has_predio_instituto1`
    FOREIGN KEY (`instituto`)
    REFERENCES `db_frameworkufrrj`.`instituto` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_instituto_has_predio_predio1`
    FOREIGN KEY (`predio`)
    REFERENCES `db_frameworkufrrj`.`predio` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`conteudo_avaliacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`conteudo_avaliacao` (
  `conteudo` INT NOT NULL,
  `avaliacao` INT NOT NULL,
  PRIMARY KEY (`conteudo`, `avaliacao`),
  INDEX `fk_conteudo_has_avaliacao_avaliacao1_idx` (`avaliacao` ASC),
  INDEX `fk_conteudo_has_avaliacao_conteudo1_idx` (`conteudo` ASC),
  CONSTRAINT `fk_conteudo_has_avaliacao_conteudo1`
    FOREIGN KEY (`conteudo`)
    REFERENCES `db_frameworkufrrj`.`conteudo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_conteudo_has_avaliacao_avaliacao1`
    FOREIGN KEY (`avaliacao`)
    REFERENCES `db_frameworkufrrj`.`avaliacao` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_frameworkufrrj`.`disciplina_curso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_frameworkufrrj`.`disciplina_curso` (
  `curso` INT NOT NULL,
  `disciplina` INT NOT NULL,
  PRIMARY KEY (`curso`, `disciplina`),
  INDEX `fk_curso_has_disciplina_disciplina1_idx` (`disciplina` ASC),
  INDEX `fk_curso_has_disciplina_curso1_idx` (`curso` ASC),
  CONSTRAINT `fk_curso_has_disciplina_curso1`
    FOREIGN KEY (`curso`)
    REFERENCES `db_frameworkufrrj`.`curso` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_curso_has_disciplina_disciplina1`
    FOREIGN KEY (`disciplina`)
    REFERENCES `db_frameworkufrrj`.`disciplina` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

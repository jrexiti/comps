import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept.</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}

      <p className="pt-12">
        Generating long and coherent text is an important but challenging task,
        particularly for open-ended language generation tasks such as story
        generation. Despite the success in modeling intra-sentence coherence,
        existing generation models (e.g., BART) still struggle to maintain a
        coherent event sequence throughout the generated text. We conjecture
        that this is because of the difficulty for the decoder to capture the
        high-level semantics and discourse structures in the context beyond
        token-level co-occurrence. In this paper, we propose a long text
        generation model, which can represent the prefix sentences at sentence
        level and discourse level in the decoding process. To this end, we
        propose two pretraining objectives to learn the representations by
        predicting inter-sentence semantic similarity and distinGenerating long
        and coherent text is an important but challenging task, particularly for
        open-ended language generation tasks such as story generation. Despite
        the success in modeling intra-sentence coherence, existing generation
        models (e.g., BART) still struggle to maintain a coherent event sequence
        throughout the generated text. We conjecture that this is because of the
        difficulty for the decoder to capture the high-level semantics and
        discourse structures in the context beyond token-level co-occurrence. In
        this paper, we propose a long text generation model, which can represent
        the prefix sentences at sentence level and discourse level in the
        decoding process. To this end, we propose two pretraining objectives to
        learn the representations by predicting inter-sentence semantic
        similarity and distinGenerating long and coherent text is an important
        but challenging task, particularly for open-ended language generation
        tasks such as story generation. Despite the success in modeling
        intra-sentence coherence, existing generation models (e.g., BART) still
        struggle to maintain a coherent event sequence throughout the generated
        text. We conjecture that this is because of the difficulty for the
        decoder to capture the high-level semantics and discourse structures in
        the context beyond token-level co-occurrence. In this paper, we propose
        a long text generation model, which can represent the prefix sentences
        at sentence level and discourse level in the decoding process. To this
        end, we propose two pretraining objectives to learn the representations
        by predicting inter-sentence semantic similarity and distinGenerating
        long and coherent text is an important but challenging task,
        particularly for open-ended language generation tasks such as story
        generation. Despite the success in modeling intra-sentence coherence,
        existing generation models (e.g., BART) still struggle to maintain a
        coherent event sequence throughout the generated text. We conjecture
        that this is because of the difficulty for the decoder to capture the
        high-level semantics and discourse structures in the context beyond
        token-level co-occurrence. In this paper, we propose a long text
        generation model, which can represent the prefix sentences at sentence
        level and discourse level in the decoding process. To this end, we
        propose two pretraining objectives to learn the representations by
        predicting inter-sentence semantic similarity and distinGenerating long
        and coherent text is an important but challenging task, particularly for
        open-ended language generation tasks such as story generation. Despite
        the success in modeling intra-sentence coherence, existing generation
        models (e.g., BART) still struggle to maintain a coherent event sequence
        throughout the generated text. We conjecture that this is because of the
        difficulty for the decoder to capture the high-level semantics and
        discourse structures in the context beyond token-level co-occurrence. In
        this paper, we propose a long text generation model, which can represent
        the prefix sentences at sentence level and discourse level in the
        decoding process. To this end, we propose two pretraining objectives to
        learn the representations by predicting inter-sentence semantic
        similarity and distinGenerating long and coherent text is an important
        but challenging task, particularly for open-ended language generation
        tasks such as story generation. Despite the success in modeling
        intra-sentence coherence, existing generation models (e.g., BART) still
        struggle to maintain a coherent event sequence throughout the generated
        text. We conjecture that this is because of the difficulty for the
        decoder to capture the high-level semantics and discourse structures in
        the context beyond token-level co-occurrence. In this paper, we propose
        a long text generation model, which can represent the prefix sentences
        at sentence level and discourse level in the decoding process. To this
        end, we propose two pretraining objectives to learn the representations
        by predicting inter-sentence semantic similarity and distinGenerating
        long and coherent text is an important but challenging task,
        particularly for open-ended language generation tasks such as story
        generation. Despite the success in modeling intra-sentence coherence,
        existing generation models (e.g., BART) still struggle to maintain a
        coherent event sequence throughout the generated text. We conjecture
        that this is because of the difficulty for the decoder to capture the
        high-level semantics and discourse structures in the context beyond
        token-level co-occurrence. In this paper, we propose a long text
        generation model, which can represent the prefix sentences at sentence
        level and discourse level in the decoding process. To this end, we
        propose two pretraining objectives to learn the representations by
        predGenerating long and coherent text is an important but challenging
        task, particularly for open-ended language generation tasks such as
        story generation. Despite the success in modeling intra-sentence
        coherence, existing generation models (e.g., BART) still struggle to
        maintain a coherent event sequence throughout the generated text. We
        conjecture that this is because of the difficulty for the decoder to
        capture the high-level semantics and discourse structures in the context
        beyond token-level co-occurrence. In this paper, we propose a long text
        generation model, which can represent the prefix sentences at sentence
        level and discourse level in the decoding process. To this end, we
        propose two pretraining objectives to learn the representations by
        predicting inter-sentence semantic similarity and distinGenerating long
        and coherent text is an important but challenging task, particularly for
        open-ended language generation tasks such as story generation. Despite
        the success in modeling intra-sentence coherence, existing generation
        models (e.g., BART) still struggle to maintain a coherent event sequence
        throughout the generated text. We conjecture that this is because of the
        difficulty for the decoder to capture the high-level semantics and
        discourse structures in the context beyond token-level co-occurrence. In
        this paper, we propose a long text generation model, which can represent
        the prefix sentences at sentence level and discourse level in the
        decoding process. To this end, we propose two pretraining objectives to
        learn the representations by predicting inter-sentence semantic
        similarity and distinGenerating long and coherent text is an important
        but challenging task, particularly for open-ended language generation
        tasks such as story generation. Despite the success in modeling
        intra-sentence coherence, existing generation models (e.g., BART) still
        struggle to maintain a coherent event sequence throughout the generated
        text. We conjecture that this is because of the difficulty for the
        decoder to capture the high-level semantics and discourse structures in
        the context beyond token-level co-occurrence. In this paper, we propose
        a long text generation model, which can represent the prefix sentences
        at sentence level and discourse level in the decoding process. To this
        end, we propose two pretraining objectives to learn the representations
        by predicting inter-sentence semantic similarity and distinGenerating
        long and coherent text is an important but challenging task,
        particularly for open-ended language generation tasks such as story
        generation. Despite the success in modeling intra-sentence coherence,
        existing generation models (e.g., BART) still struggle to maintain a
        coherent event sequence throughout the generated text. We conjecture
        that this is because of the difficulty for the decoder to capture the
        high-level semantics and discourse structures in the context beyond
        token-level co-occurrence. In this paper, we propose a long text
        generation model, which can represent the prefix sentences at sentence
        level and discourse level in the decoding process. To this end, we
        propose two pretraining objectives to learn the representations by
        predicting inter-sentence semantic similarity and distinGenerating long
        and coherent text is an important but challenging task, particularly for
        open-ended language generation tasks such as story generation. Despite
        the success in modeling intra-sentence coherence, existing generation
        models (e.g., BART) still struggle to maintain a coherent event sequence
        throughout the generated text. We conjecture that this is because of the
        difficulty for the decoder to capture the high-level semantics and
        discourse structures in the context beyond token-level co-occurrence. In
        this paper, we propose a long text generation model, which can represent
        the prefix sentences at sentence level and discourse level in the
        decoding process. To this end, we propose two pretraining objectives to
        learn the representations by predicting inter-sentence semantic
        similarity and distinGenerating long and coherent text is an important
        but challenging task, particularly for open-ended language generation
        tasks such as story generation. Despite the success in modeling
        intra-sentence coherence, existing generation models (e.g., BART) still
        struggle to maintain a coherent event sequence throughout the generated
        text. We conjecture that this is because of the difficulty for the
        decoder to capture the high-level semantics and discourse structures in
        the context beyond token-level co-occurrence. In this paper, we propose
        a long text generation model, which can represent the prefix sentences
        at sentence level and discourse level in the decoding process. To this
        end, we propose two pretraining objectives to learn the representations
        by predicting inter-sentence semantic similarity and distinGenerating
        long and coherent text is an important but challenging task,
        particularly for open-ended language generation tasks such as story
        generation. Despite the success in modeling intra-sentence coherence,
        existing generation models (e.g., BART) still struggle to maintain a
        coherent event sequence throughout the generated text. We conjecture
        that this is because of the difficulty for the decoder to capture the
        high-level semantics and discourse structures in the context beyond
        token-level co-occurrence. In this paper, we propose a long text
        generation model, which can represent the prefix sentences at sentence
        level and discourse level in the decoding process. To this end, we
        propose two pretraining objectives to learn the representations by
        predicting inter-sentence semantic similarity and distinGenerating long
        and coherent text is an important but challenging task, particularly for
        open-ended language generation tasks such as story generation. Despite
        the success in modeling intra-sentence coherence, existing generation
        models (e.g., BART) still struggle to maintain a coherent event sequence
        throughout the generated text. We conjecture that this is because of the
        difficulty for the decoder to capture the high-level semantics and
        discourse structures in the context beyond token-level co-occurrence. In
        this paper, we propose a long text generation model, which can represent
        the prefix sentences at sentence level and discourse level in the
        decoding process. To this end, we propose two pretraining objectives to
        learn the representations by predicting inter-sentence semantic
        similarity and distinGenerating long and coherent text is an important
        but challenging task, particularly for open-ended language generation
        tasks such as story generation. Despite the success in modeling
        intra-sentence coherence, existing generation models (e.g., BART) still
        struggle to maintain a coherent event sequence throughout the generated
        text. We conjecture that this is because of the difficulty for the
        decoder to capture the high-level semantics and discourse structures in
        the context beyond token-level co-occurrence. In this paper, we propose
        a long text generation model, which can represent the prefix sentences
        at sentence level and discourse level in the decoding process. To this
        end, we propose two pretraining objectives to learn the representations
        by predicting inter-sentence semantic similarity and distinGenerating
        long and coherent text is an important but challenging task,
        particularly for open-ended language generation tasks such as story
        generation. Despite the success in modeling intra-sentence coherence,
        existing generation models (e.g., BART) still struggle to maintain a
        coherent event sequence throughout the generated text. We conjecture
        that this is because of the difficulty for the decoder to capture the
        high-level semantics and discourse structures in the context beyond
        token-level co-occurrence. In this paper, we propose a long text
        generation model, which can represent the prefix sentences at sentence
        level and discourse level in the decoding process. To this end, we
        propose two pretraining objectives to learn the representations by
        predicting inter-sentence semantic similarity and distinGenerating long
        and coherent text is an important but challenging task, particularly for
        open-ended language generation tasks such as story generation. Despite
        the success in modeling intra-sentence coherence, existing generation
        models (e.g., BART) still struggle to maintain a coherent event sequence
        throughout the generated text. We conjecture that this is because of the
        difficulty for the decoder to capture the high-level semantics and
        discourse structures in the context beyond token-level co-occurrence. In
        this paper, we propose a long text generation model, which can represent
        the prefix sentences at sentence level and discourse level in the
        decoding process. To this end, we propose two pretraining objectives to
        learn the representations by predicting inter-sentence semantic
        similarity and distinicting inter-sentence semantic similarity and
        distin
      </p>
    </div>
  );
}
export default ModalPage;

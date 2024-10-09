import { PiWaveSineBold } from "react-icons/pi";
import { PiWaveform } from "react-icons/pi";
import { GiSettingsKnobs } from "react-icons/gi";
import { LuListFilter } from "react-icons/lu";
import { BsMagic } from "react-icons/bs";
import { LuWaves } from "react-icons/lu";
import { TbWaveSquare } from "react-icons/tb";
import Accordion from "./Accordion";


const Features = () => {
  return (
    <div className="w-full max-w-[1280px] p-6 mx-auto">
      <h1 className="text-4xl lg:text-6xl font-bold lg:mb-20 mb-10">
        Main Features
      </h1>
      <div>
        <ul>
          <Accordion
            title="Import and create custom wavetables with ease"
            icon={<PiWaveform size={24} />}
          >
            Serum has a Wavetable editor built right in- you can create your own
            wavetables in a variety of ways. Import audio directly from audio
            files - Serum has a variety of methods and options for analyzing
            audio for breaking it apart into individual waveforms. You can
            import single-cycle wavetables of course, as well as many at once
            (with in-built sorting options, or manual re-ordering). Morph
            between various wavetables using standard linear interpolation
            (crossfading) or via harmonic/spectral morphing. Draw directly on
            the waveform, with optional grid-size snapping and a variety of
            shape tools. Generate or modify waveforms using FFT (additive).
            Create or process waveforms using formula functions. Processing menu
            options allow you to do the other tasks you would want, such as
            apply fades, crossfades, normalize, export, and much more.
          </Accordion>
          <Accordion
            title="Ultra-clean oscillators"
            icon={<PiWaveSineBold size={24} />}
          >
            Playback of wavetables requires digital resampling to play different
            frequencies. Without considerable care and a whole lot of number
            crunching, this process will create audible artifacts. Artifacts
            mean that you are (perhaps unknowingly) crowding your mix with
            unwanted tones / frequencies. Many popular wavetable synthesizers
            are astonishingly bad at suppressing artifacts - even on a
            high-quality setting some create artifacts as high as -36 dB to -60
            dB (level difference between fundamental on artifacts) which is well
            audible, and furthermore often dampening the highest wanted audible
            frequencies in the process, to try and suppress this unwanted sound.
            In Serum, the native-mode (default) playback of oscillators operates
            with an ultra high-precision resampling, yielding an astonishingly
            inaudible signal-to-noise (for instance, -150 dB on a sawtooth
            played at 1 Khz at 44100)! This requires a lot of calculations, so
            Serum’s oscillator playback has been aggressively optimized using
            SSE2 instructions to allow for this high-quality playback without
            taxing your CPU any more than the typical (decent quality) soft
            synth already does. Load up Serum and we think you’ll be able to
            notice both what you hear (solid high frequencies, extending flat
            all the way up to the limits of hearing) as well as what you don’t
            hear (no unwanted mud or aliasing gibberish- just good, clean
            sound).
          </Accordion>
          <Accordion
            title="Modulation - Work the way you want to"
            icon={<TbWaveSquare size={24} />}
          >
            The modulation system allows for drag and drop connections between
            mod sources and destinations. Want an LFO controlling a filter
            cutoff? Simply drag the LFO title to the cutoff knob. This
            LFO-&gt;Filter connection will now appear in the Mod Matrix as well.
            In other words, you have two views/approaches for creating and
            modifying your modulations: sometimes a list is nice, other times
            you just want the job done fast and easy.
          </Accordion>
          <Accordion
            title="Real-time wave table manipulation"
            icon={<GiSettingsKnobs size={24} />}
          >
            In addition to moving through the set of wavetables (up to 256 make
            up a single oscillator), you can manipulate the waveform itself in a
            separate realtime process referred to as Warp. This allows for
            FM/AM/RM/Oscillator Sync and many other ways to modify the waveform,
            including “Remap” modes - a graph editor for drawing your own custom
            table manipulations.
          </Accordion>
          <Accordion title="Filter types" icon={<LuListFilter size={24} />}>
            Serum includes all of the filter types found in LFOTool in addition
            to some brand-new ones. Flangers, Phasers, and Comb filters all of
            which can key-track to the musical note you play. Dual filter types
            let you control or morph between filter types. Get creative with
            atypical processes for filters such as downsampling, or the unique
            filter types found nowhere before, such as the dirty-sounding French
            LPF.
          </Accordion>
          <Accordion
            title="Built-in suite of effects"
            icon={<BsMagic size={24} />}
          >
            An effects rack with 10 effects modules lets you get your sound all
            the way to the finish line inside Serum. Effects can be re-ordered
            to any configuration you want. Virtually all effect parameters are
            also available as modulation destinations. This is especially useful
            on monophonic synth sounds. For example, apply an LFO to control
            reverb size or dry/wet, or velocity to control distortion amount.
            Many of these effects and modes were built just for Serum, so there
            are many unique effects to choose from, such as Hyper, which
            simulates (additional) unison amounts, or a dual-waveshaper which
            allows for a distortion you can morph between two separate wave
            shapes.
          </Accordion>
          <Accordion title="Advanced unison" icon={<LuWaves size={24} />}>
            Serum will let you stack a single oscillator to use up to 16 voices.
            Each of the wavetable oscillators have a number of unison advanced
            parameters. Stack settings allow for note (e.g. octave) layering to
            get a fuller sound for a single note-press. Set the unison voices to
            all have their unique waveform at once with the Unison WT Pos
            setting, or have them all skewed in a different way with the unison
            Warp control. A variety of unison tuning modes per-oscillator let
            you get the stack sound blooming or swarming like you want.
          </Accordion>
        </ul>
      </div>
    </div>
  );
};

export default Features;
